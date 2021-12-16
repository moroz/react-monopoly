import React from "react";
import { UtilityProperty } from "../../interfaces/fields";
import styles from "./TitleDeed.module.sass";
import clsx from "clsx";

interface Props {
  field: UtilityProperty;
}

const UtilityDeed: React.FC<Props> = ({ field }) => {
  return (
    <div className={clsx(styles.root, styles.railway)}>
      <header>
        <img src={field.image} />
        <h3>{field.title}</h3>
      </header>
      <main>
        <p>
          If one &ldquo;Utility&rdquo; is owned rent is 4 times amount shown on
          dice.
        </p>
        <p>
          If both &ldquo;Utilities&rdquo; are owned rent is 10 times amount
          shown on dice.
        </p>
      </main>
    </div>
  );
};

export default UtilityDeed;
