export class Player {
  name: string;
  color: string;
  position: number = 1;
  balance: number = 1500;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
}

export enum GameStage {
  Preparation,
  Gameplay
}

export class GameState {
  currentPlayer: number = 0;
  players: Player[];
  turn: number = 1;
  stage: GameStage = GameStage.Preparation;

  constructor(players: Player[]) {
    this.players = players;
  }

  static fromJSON(json: any) {
    const state = new GameState([]);
    Object.assign(state, json);
    return state;
  }
}
