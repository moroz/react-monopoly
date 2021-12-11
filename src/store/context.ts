import React, { useContext, useReducer } from "react";
import gameStateReducer, { initialState } from "./reducer";
import { GameState } from "./state";
import { Action } from "./actions";

export const useGameStateReducer = () =>
  useReducer(gameStateReducer, initialState);

export type ReducerTuple = [GameState, React.Dispatch<Action>];

export const ReducerContext = React.createContext<ReducerTuple | undefined>(
  undefined
);

export const useGameState = () => useContext(ReducerContext)!;
