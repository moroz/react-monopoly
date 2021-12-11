import { Field, FieldType } from "../interfaces/fields";

const FieldData: Record<number, Field> = {
  "1": {
    title: "Side",
    price: 60,
    color: "#ac9393",
    type: FieldType.Property
  },
  "3": {
    title: "Istanbul",
    price: 60,
    color: "#ac9393",
    type: FieldType.Property
  },
  "6": {
    title: "Płowdiw",
    price: 100,
    color: "#d45500",
    type: FieldType.Property
  },
  "8": {
    title: "Sofia",
    price: 120,
    color: "#d45500",
    type: FieldType.Property
  },
  "9": {
    title: "Ruse",
    price: 100,
    color: "#d45500",
    type: FieldType.Property
  },

  11: {
    title: "Lviv",
    price: 140,
    color: "#0043ff",
    type: FieldType.Property
  },
  12: {
    title: "Kharkiv",
    price: 140,
    color: "#0043ff",
    type: FieldType.Property
  },
  14: {
    title: "Kyiv",
    price: 160,
    color: "#0043ff",
    type: FieldType.Property
  },

  16: {
    title: "Cracow",
    price: 180,
    color: "red",
    type: FieldType.Property
  },
  18: {
    title: "Poznań",
    price: 180,
    color: "red",
    type: FieldType.Property
  },
  19: {
    title: "Warsaw",
    price: 200,
    color: "red",
    type: FieldType.Property
  },

  21: {
    title: "Tainan",
    price: 240,
    color: "#da2c5e",
    type: FieldType.Property
  },
  23: {
    title: "Taichung",
    price: 220,
    color: "#da2c5e",
    type: FieldType.Property
  },
  24: {
    title: "Taipei",
    price: 220,
    color: "#da2c5e",
    type: FieldType.Property
  },

  26: {
    title: "Hiroshima",
    price: 260,
    color: "#ffff00",
    type: FieldType.Property
  },
  29: {
    title: "Kyoto",
    price: 280,
    color: "#ffff00",
    type: FieldType.Property
  },
  27: {
    title: "Tokyo",
    price: 280,
    color: "#ffff00",
    type: FieldType.Property
  },

  "40": {
    title: "Start",
    type: FieldType.Start
  }
};

export default FieldData;
