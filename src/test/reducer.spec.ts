import reducer from "../store/reducer";
import { Action, ActionType } from "../store/actions";
import { GameStage, GameState } from "../store/state";
import { PawnType } from "../interfaces/pawns";
import { Player } from "../interfaces/players";

test("newly initialized contains all expected fields", () => {
  const { players, propertyOwnership, currentPlayer, turn, stage } =
    new GameState();

  expect(Array.isArray(players)).toBe(true);
  expect(stage).toEqual(GameStage.Preparation);
  expect(currentPlayer).toEqual(0);
  expect(turn).toEqual(1);
  expect(typeof propertyOwnership).toEqual("object");

  Object.entries(propertyOwnership).forEach(([key, value]) => {
    expect(Number(key)).toBeGreaterThan(0);
    expect(Number(key)).toBeLessThan(40);
    expect(value).toBeNull();
  });
});

test("AddPlayer action adds new player", () => {
  const initial = new GameState();

  const action: Action = {
    type: ActionType.SetPlayers,
    players: [
      { name: "Mati", pawnType: PawnType.Dino },
      { name: "Mori", pawnType: PawnType.Car }
    ]
  };

  const { players } = reducer(initial, action);
  expect(players.length).toEqual(2);
});

describe("MovePlayer action", () => {
  let initial: GameState;

  beforeEach(() => {
    initial = new GameState([
      new Player({ name: "foobar", pawnType: PawnType.Dog }),
      new Player({ name: "dino", pawnType: PawnType.Dino })
    ]);
    expect(initial.isStarted).toBe(false);
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
