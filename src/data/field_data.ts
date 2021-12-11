import { Field, FieldType } from "../interfaces/fields";

const FieldData: Record<number, Field> = {
  "1": {
    title: "Side",
    price: 60,
    color: "red",
    type: FieldType.Property
  },
  "3": {
    title: "Istanbul",
    price: 60,
    color: "red",
    type: FieldType.Property
  },
  "6": {
    title: "Płowdiw",
    price: 100,
    color: "blue",
    type: FieldType.Property
  },
  "8": {
    title: "Sofia",
    price: 120,
    color: "blue",
    type: FieldType.Property
  },
  "9": {
    title: "Ruse",
    price: 100,
    color: "blue",
    type: FieldType.Property
  },
  "40": {
    title: "Start",
    type: FieldType.Start
  }
};

export default FieldData;
