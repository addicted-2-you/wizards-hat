import { CSpell } from 'models/spells/CSpell';
import { ECastingTargets } from 'models/spells/ECastingTargets';
import { ESpells } from 'models/spells/ESpellsNames';

import { destroyOwnCell } from 'store/action-creators/game.action-creators';

// TODO: add input validation
// TODO: add default value for target param
export function parseSpellText(spellText: string): CSpell {
  const [spellName, target, ...params] = spellText
    .trim()
    .split(/(\s+)/)
    .filter((item) => item.trim().length > 0);

  return new CSpell({ spellName, target, params });
}

export function getActionCreator(spell: CSpell): Function | null {
  switch (spell.spellName) {
    case ESpells.DESTROY: {
      return destroyOwnCell;
    }
    default: {
      return null;
    }
  }
}
