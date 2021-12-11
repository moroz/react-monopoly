export enum ActionType {
  EndTurn,
  BuyProperty,
  AddPlayer
}

export interface EndTurnAction {
  type: ActionType.EndTurn;
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

export type Action = EndTurnAction | BuyPropertyAction | AddPlayerAction;
