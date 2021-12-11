import { Reducer } from "react";
import { Action, ActionType } from "./actions";
import { GameStage, GameState, MarkerType, Player } from "./state";

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
      const player = new Player(name, color as MarkerType);
      return {
        ...state,
        players: [...state.players, player]
      };
    }

    case ActionType.MovePlayer: {
      const { fieldCount, player } = action;
      if (fieldCount < 1 || fieldCount > 12) return state;
      if (player < 0 || player > state.players.length - 1) return state;
      return {
        ...state,
        players: state.players.map((p, index) => {
          if (index !== player) return p;
          const { position } = p;
          const newPosition = (position + fieldCount) % 40;

          // when crossing Start, add $200 to balance
          if (newPosition < position) {
            return {
              ...p,
              position: newPosition,
              balance: p.balance + 200
            };
          }
          return {
            ...p,
            position: newPosition
          };
        })
      };
    }

    case ActionType.ResetGame: {
      return initialState;
    }

    case ActionType.StartGame: {
      if (state.canStart)
        return {
          ...state,
          stage: GameStage.Gameplay
        };

      return state;
    }

    default:
      return state;
  }
};

export default gameStateReducer;
