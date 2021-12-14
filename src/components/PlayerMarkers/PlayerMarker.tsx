import React from "react";
import { PawnType, Player } from "../../store/state";
import Dog from "./dog.png";
import Car from "./car.png";
import Dino from "./dinosaur.png";
import Fish from "./puffer-fish.png";

interface Props {
  player: Player;
}

export const PawnTypeToIcon: Record<PawnType, string> = {
  [PawnType.Dino]: Dino,
  [PawnType.Car]: Car,
  [PawnType.Dog]: Dog,
  [PawnType.Fish]: Fish
};

const PlayerMarker: React.FC<Props> = ({ player }) => {
  return (
    <marker>
      <img src={PawnTypeToIcon[player.pawnType]} />
    </marker>
  );
};

export default PlayerMarker;
