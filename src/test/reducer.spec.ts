import reducer from "../store/reducer";
import { Action, ActionType } from "../store/actions";
import { GameStage } from "../store/state";

function initialState() {
  return reducer(undefined as any, { type: ActionType.ResetGame });
}

test("newly initialized contains all expected fields", () => {
  const { players, currentPlayer, turn, stage } = initialState();

  expect(Array.isArray(players)).toBe(true);
  expect(stage).toEqual(GameStage.Preparation);
  expect(currentPlayer).toEqual(0);
  expect(turn).toEqual(1);
});

test("AddPlayer action adds new player", () => {
  const initial = initialState();

  const action: Action = {
    type: ActionType.AddPlayer,
    name: "foobar",
    color: "dog"
  };

  const { players } = reducer(initial, action);
  expect(players.length).toEqual(1);
});
