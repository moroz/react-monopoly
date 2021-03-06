import { Reducer } from "react";
import { rollDice } from "../components/ControlPanel/dices";
import FieldData from "../data/field_data";
import { Property } from "../interfaces/fields";
import { Player } from "../interfaces/players";
import { Action, ActionType } from "./actions";
import { getTurnStageByState } from "./helpers";
import { GameStage, GameState, TurnStage } from "./state";

export const initialState = new GameState([]);

function nextTurnStage(state: GameState) {
  if (state.currentTurn.canRollAgain) return TurnStage.BeforeRoll;
  return TurnStage.NoActionsLeft;
}

const gameStateReducer: Reducer<GameState, Action> = (
  state = initialState,
  action
): GameState => {
  switch (action.type) {
    case ActionType.EndTurn: {
      const playerCount = state.players.length;
      const nextIndex = (state.currentPlayer + 1) % playerCount;

      return {
        ...state,
        currentPlayer: nextIndex,
        turn: nextIndex > 0 ? state.turn : state.turn + 1,
        currentTurn: {
          diceResult: null,
          canRollAgain: false,
          turnStage: TurnStage.BeforeRoll
        }
      };
    }

    case ActionType.SetPlayers: {
      if (state.stage !== GameStage.Preparation) return state;
      const { players } = action;
      return {
        ...state,
        players: players.map((params) => new Player(params)),
        stage: GameStage.Gameplay
      };
    }

    case ActionType.MovePlayer: {
      const { fieldCount, player } = action;
      if (fieldCount < 1 || fieldCount > 12) return state;
      if (player < 0 || player > state.players.length - 1) return state;

      const newState = {
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

      return {
        ...newState,
        currentTurn: {
          ...newState.currentTurn,
          turnStage: getTurnStageByState(newState)
        }
      };
    }

    case ActionType.BuyProperty: {
      const { propertyId, player } = action;
      const property = FieldData[propertyId] as Property;
      if (!property || !property.price) {
        console.error("Invalid property ID");
        return state;
      }
      if (!state.players[player]) {
        console.error("Invalid player");
        return state;
      }
      if (state.players[player].balance < property.price) {
        console.error("Insufficient balance");
        return state;
      }
      if (state.propertyOwnership[propertyId] !== null) {
        console.error("Property already has an owner");
        return state;
      }

      return {
        ...state,
        propertyOwnership: {
          ...state.propertyOwnership,
          [propertyId]: player
        },
        currentTurn: {
          ...state.currentTurn,
          turnStage: nextTurnStage(state)
        },
        players: state.players.map((p, index) => {
          if (index !== player) return p;

          return {
            ...p,
            balance: p.balance - property.price!
          };
        })
      };
    }

    case ActionType.RollDice: {
      const [left, right] = rollDice();

      return {
        ...state,
        currentTurn: {
          diceResult: [left, right],
          turnStage: TurnStage.AfterRoll,
          canRollAgain: left === right
        }
      };
    }

    case ActionType.Dismiss: {
      return {
        ...state,
        currentTurn: {
          ...state.currentTurn,
          turnStage: nextTurnStage(state)
        }
      };
    }

    case ActionType.TransferMoney: {
      return {
        ...state,
        currentTurn: {
          ...state.currentTurn,
          turnStage: nextTurnStage(state)
        },
        players: state.players.map((player, i) => {
          if (i === action.from) {
            return { ...player, balance: player.balance - action.amount };
          }
          if (i === action.to) {
            return { ...player, balance: player.balance + action.amount };
          }
          return player;
        })
      };
    }

    case ActionType.ResetGame: {
      return initialState;
    }

    default:
      return state;
  }
};

export default gameStateReducer;
