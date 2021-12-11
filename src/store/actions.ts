export enum ActionType {
  EndTurn,
  BuyProperty
}

export interface EndTurnAction {
  type: ActionType.EndTurn;
}

export interface BuyPropertyAction {
  type: ActionType.BuyProperty;
  index: number;
}

export type Action = EndTurnAction | BuyPropertyAction;
