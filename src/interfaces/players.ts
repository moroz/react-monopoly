import { PawnType } from "./pawns";

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
