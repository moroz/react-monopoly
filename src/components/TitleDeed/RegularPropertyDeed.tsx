import clsx from "clsx";
import React from "react";
import { COUNTRY_COLORS } from "../../data/field_data";
import { RegularProperty } from "../../interfaces/fields";
import styles from "./TitleDeed.module.sass";

interface Props {
  field: RegularProperty;
}

const RegularPropertyDeed: React.FC<Props> = ({ field }) => {
  const light =
    field.color === COUNTRY_COLORS[0] || field.color === COUNTRY_COLORS[7];
  return (
    <div
      className={clsx(styles.root, styles.regularProperty, {
        [styles.light]: light
      })}
      style={
        {
          "--property-color": field.color
        } as any
      }
    >
      <header>
        <span>Title deed</span>
        <h3>{field.title}</h3>
      </header>
      <main>
        {field.rents ? (
          <>
            <table className={styles.rentTable}>
              <tbody>
                <tr>
                  <th>Rent</th>
                  <td>${field.rents[0]}</td>
                </tr>
                <tr>
                  <th>With color set</th>
                  <td>${field.rents[0] * 2}</td>
                </tr>
                {[1, 2, 3, 4].map((houses) => (
                  <tr key={houses}>
                    <th>
                      With {houses} {houses === 1 ? "house" : "houses"}
                    </th>
                    <td>${field.rents![houses]}</td>
                  </tr>
                ))}
                <tr>
                  <th>With HOTEL</th>
                  <td>${field.rents![5]}</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <table className={styles.rentTable}>
              <tbody>
                <tr>
                  <th>Houses cost</th>
                  <td>${field.housePrice}</td>
                </tr>
                <tr>
                  <th>Mortgage Value</th>
                  <td>${field.price! / 2}</td>
                </tr>
              </tbody>
            </table>
          </>
        ) : null}
      </main>
    </div>
  );
};

export default RegularPropertyDeed;
