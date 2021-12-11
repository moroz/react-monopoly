import reducer from "../store/reducer";
import { Action, ActionType } from "../store/actions";
import { GameStage, GameState, MarkerType, Player } from "../store/state";

test("newly initialized contains all expected fields", () => {
  const { players, currentPlayer, turn, stage } = new GameState();

  expect(Array.isArray(players)).toBe(true);
  expect(stage).toEqual(GameStage.Preparation);
  expect(currentPlayer).toEqual(0);
  expect(turn).toEqual(1);
});

test("AddPlayer action adds new player", () => {
  const initial = new GameState();

  const action: Action = {
    type: ActionType.AddPlayer,
    name: "foobar",
    color: "dog"
  };

  const { players } = reducer(initial, action);
  expect(players.length).toEqual(1);
});

describe("MovePlayer action", () => {
  let initial: GameState;

  beforeEach(() => {
    initial = new GameState([
      new Player("foobar", MarkerType.Dog),
      new Player("dino", MarkerType.Dino)
    ]);
    expect(initial.canStart).toBe(true);
    initial.stage = GameStage.Gameplay;
  });

  test("moves player by n fields", () => {
    const action: Action = {
      type: ActionType.MovePlayer,
      player: 0,
      fieldCount: 10
    };

    expect(initial.players[0].position).toEqual(0);
    expect(initial.players[0].balance).toEqual(1500);

    const actual = reducer(initial, action);
    expect(actual.players[0].position).toEqual(10);
    expect(actual.players[0].balance).toEqual(1500);
  });

  test("when player crosses Start, adds 200 to balance", () => {
    initial.players[0].position = 35;
    expect(initial.players[0].balance).toEqual(1500);

    const action: Action = {
      type: ActionType.MovePlayer,
      player: 0,
      fieldCount: 10
    };

    const actual = reducer(initial, action);
    expect(actual.players[0].position).toEqual(5);
    expect(actual.players[0].balance).toEqual(1700);
  });
});
