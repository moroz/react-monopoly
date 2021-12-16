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

export type PropertyType =
  | FieldType.Property
  | FieldType.Railway
  | FieldType.Utility;

export interface GenericField {
  title?: string;
  type: Omit<FieldType, PropertyType | FieldType.Tax>;
  image?: string;
}

export interface TaxField {
  title?: string;
  image: string;
  type: FieldType.Tax;
  price: number;
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

export interface UtilityProperty {
  type: FieldType.Utility;
  title: string;
  price: number;
  image: string;
}

export type Property = RegularProperty | RailwayProperty | UtilityProperty;
export type Field = Property | GenericField | TaxField;
