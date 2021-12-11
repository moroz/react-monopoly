export interface Player {
  name: string;
  color: string;
}

export class GameState {
  currentPlayer: number = 0;
  players: Player[];
  turn: number = 1;

  constructor(players: Player[]) {
    this.players = players;
  }
}
