export enum FieldType {
  Property = "property",
  Chance = "chance",
  Social = "social",
  Start = "start",
  Jail = "jail",
  Parking = "parking",
  Railway = "railway",
  Utility = "utility"
}

export interface Field {
  title?: string;
  price?: number;
  name?: string;
  type: FieldType;
  color?: string;
  logo?: string;
}
