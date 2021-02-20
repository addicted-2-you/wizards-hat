export enum EGameActionTypes {
  INIT_SINGLE_GAME = 'GAME@INIT_SINGLE_GAME',
  INIT_ONLINE_GAME = 'GAME@INIT_ONLINE_GAME',
  MAKE_MOVE = 'GAME@MAKE_MOVE',
  LEAVE_ONLINE_GAME = 'GAME@LEAVE_ONLINE_GAME',
  INIT_OWN_FIELD = 'GAME@INIT_OWN_FIELD',
  SET_OWN_FIELD = 'GAME@SET_OWN_FIELD',
  // UI elements visibility
  SHOW_OPPONENT_FIELD = 'GAME@SHOW_OPPONENT_FIELD',
  HIDE_OPPONENT_FIELD = 'GAME@HIDE_OPPONENT_FIELD',
}
