import { Reducer } from "react";
import { Action, ActionType } from "./actions";
import { GameStage, GameState, Player } from "./state";

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

    case ActionType.AddPlayer: {
      if (state.stage !== GameStage.Preparation) return state;
      const { name, color } = action;
      const player = new Player(name, color);
      return {
        ...state,
        players: [...state.players, player]
      };
    }

    case ActionType.ResetGame: {
      return initialState;
    }

    case ActionType.StartGame: {
      return {
        ...state,
        stage: GameStage.Gameplay
      };
    }

    default:
      return state;
  }
};

export default gameStateReducer;
