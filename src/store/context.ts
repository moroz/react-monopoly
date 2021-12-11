import React, { useContext, useReducer, useEffect } from "react";
import gameStateReducer from "./reducer";
import { GameState } from "./state";
import { Action } from "./actions";

export type ReducerTuple = [Readonly<GameState>, React.Dispatch<Action>];

export const ReducerContext = React.createContext<ReducerTuple | undefined>(
  undefined
);

export const useGameState = () => useContext(ReducerContext)!;

// https://stackoverflow.com/questions/54346866/save-to-localstorage-from-reducer-hook
function useLocallyPersistedReducer(
  reducer: typeof gameStateReducer,
  defaultState: GameState,
  storageKey: string
) {
  const hookVars = useReducer(reducer, defaultState, (defaultState) => {
    const json = localStorage.getItem(storageKey);
    const persisted = json && JSON.parse(json);
    return persisted !== null ? GameState.fromJSON(persisted) : defaultState;
  });

  const state = hookVars[0];

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }, [storageKey, state]);

  return hookVars;
}

export const useGameStateReducer = (): ReducerTuple => {
  return useLocallyPersistedReducer(
    gameStateReducer,
    new GameState([]),
    "STEREOPOLY_STATE"
  );
};
