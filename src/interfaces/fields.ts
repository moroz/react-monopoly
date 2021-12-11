export enum FieldType {
  Property,
  Chance,
  Social,
  Start,
  Jail,
  Parking
}

export interface Field {
  title: string;
  price?: number;
  name?: string;
  type: FieldType;
  color?: string;
}
