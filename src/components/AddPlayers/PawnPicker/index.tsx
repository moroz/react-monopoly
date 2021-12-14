import React, { HTMLProps } from "react";
import { PawnType } from "../../../store/state";
import PlayerMarker, { PawnTypeToIcon } from "../../PlayerMarkers/PlayerMarker";
import styles from "../AddPlayers.module.sass";

interface Props extends HTMLProps<HTMLInputElement> {
  index: number;
}

const PawnPicker: React.FC<Props> = ({ index, ...rest }) => {
  return (
    <fieldset className={styles.pawnPicker}>
      {Object.values(PawnType).map((type) => (
        <div className={styles.option}>
          <input
            hidden
            type="radio"
            value={type}
            id={`pawn-${index}-${type}`}
            {...rest}
          />
          <label htmlFor={`pawn-${index}-${type}`}>
            <img src={PawnTypeToIcon[type]} />
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default PawnPicker;
