import { PlayerParams } from "./state";

export enum ActionType {
  EndTurn,
  BuyProperty,
  SetPlayers,
  ResetGame,
  MovePlayer
}

export interface EndTurnAction {
  type: ActionType.EndTurn;
}

export interface ResetGameAction {
  type: ActionType.ResetGame;
}

export interface BuyPropertyAction {
  type: ActionType.BuyProperty;
  index: number;
}

export interface AddPlayerAction {
  type: ActionType.SetPlayers;
  players: PlayerParams[];
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
