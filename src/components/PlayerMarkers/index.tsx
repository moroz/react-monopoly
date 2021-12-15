import React from "react";
import { useGameState } from "../../store/context";
import PlayerMarker from "./PlayerMarker";
import styles from "./PlayerMarker.module.sass";

interface Props {
  index: number;
}

const PlayerMarkers: React.FC<Props> = ({ index }) => {
  const [{ players: allPlayers }] = useGameState();
  const players = allPlayers.filter((player) => player.position == index);

  if (!players) return null;

  return (
    <div className={styles.markers}>
      {players.map((player, i) => (
        <PlayerMarker player={player} key={i} />
      ))}
    </div>
  );
};

export default PlayerMarkers;
