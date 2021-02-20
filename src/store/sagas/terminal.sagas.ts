import { put, take } from 'redux-saga/effects';
import { sendSpell } from 'store/action-creators/game.action-creators';

import { addToHistory } from 'store/action-creators/terminal.action-creators';
import { ETerminalActionTypes } from 'store/action-types/terminal.action-types';

import { getActionCreator, parseSpellText } from 'utils/terminal.utils';

export function* watchSpelling() {
  while (true) {
    const action = yield take(ETerminalActionTypes.CAST_SPELL);

    // here I get action creator to update OWN state
    // if own state update is not required I will get empty action creator (nop)
    // in other case I will get ordinary action creator to update my state
    const parsedSpell = parseSpellText(action.spell);

    const relatedActionCreator = getActionCreator(parsedSpell);

    if (relatedActionCreator) {
      if (
        parsedSpell.target === 's' ||
        parsedSpell.target === 'se' ||
        parsedSpell.target === 'es'
      ) {
        yield put(relatedActionCreator(...parsedSpell.params));
      }

      if (
        parsedSpell.target === 'e' ||
        parsedSpell.target === 'se' ||
        parsedSpell.target === 'es'
      ) {
        yield put(sendSpell(relatedActionCreator(...parsedSpell.params)));
      }
    }

    yield put(addToHistory(action.spell));
  }
}
