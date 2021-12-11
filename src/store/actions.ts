export enum ActionType {
  EndTurn,
  BuyProperty,
  AddPlayer,
  ResetGame,
  StartGame,
  MovePlayer
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

export interface MovePlayerAction {
  type: ActionType.MovePlayer;
  player: number;
  fieldCount: number;
}

export type Action =
  | EndTurnAction
  | BuyPropertyAction
  | AddPlayerAction
  | MovePlayerAction
  | StartGameAction
  | ResetGameAction;
