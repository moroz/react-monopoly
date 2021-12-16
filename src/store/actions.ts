import { PlayerParams } from "../interfaces/players";

export enum ActionType {
  EndTurn,
  BuyProperty,
  SetPlayers,
  ResetGame,
  MovePlayer,
  RollDice,
  Dismiss
}

export type AtomicActionType =
  | ActionType.EndTurn
  | ActionType.ResetGame
  | ActionType.Dismiss;

export interface AtomicAction {
  type: AtomicActionType;
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

export interface RollDice {
  type: ActionType.RollDice;
}

export type Action =
  | SetPlayersAction
  | MovePlayerAction
  | BuyProperty
  | RollDice
  | AtomicAction;
