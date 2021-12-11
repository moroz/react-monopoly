import React from "react";
import { MarkerType, Player } from "../../store/state";
import Dog from "./dog.png";
import Car from "./car.png";
import Dino from "./dinosaur.png";

interface Props {
  player: Player;
}

const typeToIcon: Record<MarkerType, string> = {
  [MarkerType.Dino]: Dino,
  [MarkerType.Car]: Car,
  [MarkerType.Dog]: Dog
};

const PlayerMarker: React.FC<Props> = ({ player }) => {
  return (
    <marker>
      <img src={typeToIcon[player.marker]} />
    </marker>
  );
};

export default PlayerMarker;
