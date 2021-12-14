import React from "react";
import Dog from "./dog.png";
import Car from "./cat.png";
import Dino from "./dinosaur.png";
import Fish from "./bee.png";
import { Player } from "../../interfaces/players";
import { PawnType } from "../../interfaces/pawns";

interface Props {
  player: Player;
}

export const PawnTypeToIcon: Record<PawnType, string> = {
  [PawnType.Dino]: Dino,
  [PawnType.Cat]: Car,
  [PawnType.Dog]: Dog,
  [PawnType.Bee]: Fish
};

const PlayerMarker: React.FC<Props> = ({ player }) => {
  console.log({ player });
  return (
    <marker>
      <img src={PawnTypeToIcon[player.pawnType]} />
    </marker>
  );
};

export default PlayerMarker;
