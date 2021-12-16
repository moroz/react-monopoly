import { PlayerParams } from "../interfaces/players";

export enum ActionType {
  EndTurn,
  BuyProperty,
  SetPlayers,
  ResetGame,
  MovePlayer,
  RollDice,
  Dismiss,
  TransferMoney
}

export type AtomicActionType =
  | ActionType.EndTurn
  | ActionType.ResetGame
  | ActionType.RollDice
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

export interface TransferMoney {
  type: ActionType.TransferMoney;
  from: number;
  to: number;
  amount: number;
}

export type Action =
  | SetPlayersAction
  | MovePlayerAction
  | BuyProperty
  | TransferMoney
  | AtomicAction;
