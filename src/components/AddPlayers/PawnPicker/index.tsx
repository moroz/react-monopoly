import React, { HTMLProps } from "react";
import { UseFormRegister } from "react-hook-form";
import { PawnType } from "../../../interfaces/pawns";
import { PawnTypeToIcon } from "../../PlayerMarkers/PlayerMarker";
import styles from "../AddPlayers.module.sass";

interface Props extends HTMLProps<HTMLInputElement> {
  index: number;
  register: UseFormRegister<any>;
}

const PawnPicker: React.FC<Props> = ({ index, register }) => {
  return (
    <fieldset className={styles.pawnPicker}>
      {Object.values(PawnType).map((type) => (
        <div className={styles.option}>
          <input
            hidden
            type="radio"
            value={type}
            id={`pawn-${index}-${type}`}
            {...register(`players.${index}.pawnType`)}
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
