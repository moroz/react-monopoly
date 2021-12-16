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

// rent, with 1/2/3/4 houses, with hotel
export type RegularPropertyRents = [
  number,
  number,
  number,
  number,
  number,
  number
];

export interface GenericField {
  title?: string;
  price?: number;
  type: Omit<FieldType, "property" | "railway">;
  image?: string;
}

export interface RegularProperty {
  type: FieldType.Property;
  title: string;
  price: number;
  color: string;
  rents: RegularPropertyRents;
  housePrice: number;
}

export interface RailwayProperty {
  type: FieldType.Railway;
  title: string;
  price: number;
}

export type Field = RegularProperty | RailwayProperty | GenericField;
