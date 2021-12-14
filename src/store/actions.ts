import { PlayerParams } from "../interfaces/players";

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

export interface SetPlayersAction {
  type: ActionType.SetPlayers;
  players: PlayerParams[];
}

export interface MovePlayerAction {
  type: ActionType.MovePlayer;
  player: number;
  fieldCount: number;
}

export interface BuyProperty {
  type: ActionType.BuyProperty;
  player: number;
  propertyId: number;
}

export type Action =
  | EndTurnAction
  | SetPlayersAction
  | MovePlayerAction
  | BuyProperty
  | ResetGameAction;
