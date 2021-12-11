export enum ActionType {
  EndTurn,
  BuyProperty,
  AddPlayer,
  ResetGame,
  StartGame
}

export interface EndTurnAction {
  type: ActionType.EndTurn;
}

export interface ResetGameAction {
  type: ActionType.ResetGame;
}

export interface StartGameAction {
  type: ActionType.StartGame;
}

export interface BuyPropertyAction {
  type: ActionType.BuyProperty;
  index: number;
}

export interface AddPlayerAction {
  type: ActionType.AddPlayer;
  name: string;
  color: string;
}

export type Action =
  | EndTurnAction
  | BuyPropertyAction
  | AddPlayerAction
  | StartGameAction
  | ResetGameAction;
