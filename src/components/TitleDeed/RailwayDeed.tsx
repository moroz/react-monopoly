import React from "react";
import { RailwayProperty } from "../../interfaces/fields";
import styles from "./TitleDeed.module.sass";
import Train from "../../images/train.svg";
import clsx from "clsx";

interface Props {
  field: RailwayProperty;
}

const RailwayDeed: React.FC<Props> = ({ field }) => {
  return (
    <div className={clsx(styles.root, styles.railway)}>
      <header>
        <img src={Train} />
        <h3>{field.title}</h3>
      </header>
      <main>
        <table className={styles.rentTable}>
          <tbody>
            <tr>
              <th>Rent</th>
              <td>$25</td>
            </tr>
            <tr>
              <th>If 2 R.R.'s are owned</th>
              <td>$50</td>
            </tr>
            <tr>
              <th>If 3 R.R.'s are owned</th>
              <td>$100</td>
            </tr>
            <tr>
              <th>If 4 R.R.'s are owned</th>
              <td>$200</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <table className={styles.rentTable}>
          <tbody>
            <tr>
              <th>Mortgage Value</th>
              <td>${field.price / 2}</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default RailwayDeed;
