import { Reducer } from "react";
import { Action, ActionType } from "./actions";
import { GameState } from "./state";

export const initialState = new GameState([]);

const gameStateReducer: Reducer<GameState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionType.EndTurn: {
      const playerCount = state.players.length;
      const nextIndex = (state.currentPlayer + 1) % playerCount;

      return {
        ...state,
        currentPlayer: nextIndex,
        turn: nextIndex > 0 ? state.turn : state.turn + 1
      };
    }

    default:
      return state;
  }
};

export default gameStateReducer;
