export enum FieldType {
  Property = "property",
  Chance = "chance",
  Social = "social",
  Start = "start",
  Jail = "jail",
  Parking = "parking",
  Railway = "railway",
  Utility = "utility",
  Tax = "tax",
  JailVisit = "jailvisit"
}

export interface Field {
  title?: string;
  price?: number;
  name?: string;
  type: FieldType;
  color?: string;
  image?: string;
  rents?: PropertyRentMapping;
}

// rent, with 1/2/3/4 houses, with hotel
export type PropertyRentMapping = [
  number,
  number,
  number,
  number,
  number,
  number
];
