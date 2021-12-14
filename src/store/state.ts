export enum PawnType {
  Dino = "dino",
  Car = "car",
  Dog = "dog",
  Fish = "fish"
}

export interface PlayerParams {
  name: string;
  pawnType: PawnType;
}

export class Player {
  name: string;
  pawnType: PawnType;
  position: number = 0;
  balance: number = 1500;

  constructor({ name, pawnType }: PlayerParams) {
    this.name = name;
    this.pawnType = pawnType;
  }
}

export enum GameStage {
  Preparation = "preparation",
  Gameplay = "gameplay"
}

export class GameState {
  currentPlayer: number = 0;
  players: Player[];
  turn: number = 1;
  stage: GameStage = GameStage.Preparation;

  constructor(players: Player[] = []) {
    this.players = players;
  }

  get canStart() {
    return this.players.length > 1;
  }

  static fromJSON(json: any) {
    const state = new GameState([]);
    Object.assign(state, json);
    return state;
  }
}
