import FieldData from "../../../data/field_data";
import {
  FieldType,
  Property,
  RegularProperty
} from "../../../interfaces/fields";
import { DiceRollResult, PropertyOwnership } from "../../../store/state";

function hasColorSet(index: number, propertyOwnership: PropertyOwnership) {
  const property = FieldData[index] as RegularProperty;
  const allFields = Object.keys(FieldData).filter((i) => {
    if (Number(i) === Number(index)) return false;

    const field = FieldData[Number(i)];
    return (
      field.type === FieldType.Property &&
      (field as RegularProperty).color === property.color
    );
  });
  const ownerships = allFields.map((i) => propertyOwnership[Number(i)]);
  return ownerships.every((value) => value === propertyOwnership[index]);
}

function howManyRailways(index: number, propertyOwnership: PropertyOwnership) {
  // all railroads are on fields divisible by 5
  return Object.keys(FieldData).filter((i) => {
    return (
      Number(i) % 5 === 0 &&
      propertyOwnership[Number(i)] === propertyOwnership[index]
    );
  }).length;
}

export default function calculateAmountDue(
  index: number,
  propertyOwnership: PropertyOwnership,
  diceResult: DiceRollResult
) {
  const property = FieldData[index] as Property;

  switch (property.type) {
    case FieldType.Property: {
      if (hasColorSet(index, propertyOwnership)) {
        return property.rents[0] * 2;
      }
      return property.rents[0];
    }

    case FieldType.Railway: {
      const railroadCount = howManyRailways(index, propertyOwnership);
      return 25 * 2 ** (railroadCount - 1);
    }

    case FieldType.Utility: {
      if (propertyOwnership[13] === propertyOwnership[28]) {
        return 10 * diceResult[0] + diceResult[1];
      } else {
        return 4 * diceResult[0] + diceResult[1];
      }
    }
  }
}
