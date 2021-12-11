import { Field, FieldType } from "../interfaces/fields";
import Poké_Mart from "./Poké_Mart.png";
import Poké_Center from "./Poké_Center.png";

const FieldData: Record<number, Field> = {
  "1": {
    title: "Side",
    price: 60,
    color: "#ac9393",
    type: FieldType.Property
  },

  "2": {
    type: FieldType.Social
  },

  "3": {
    title: "Istanbul",
    price: 60,
    color: "#ac9393",
    type: FieldType.Property
  },

  5: {
    title: "Gara Sofia",
    price: 200,
    type: FieldType.Railway
  },

  "6": {
    title: "Płowdiw",
    price: 100,
    color: "#d45500",
    type: FieldType.Property
  },

  7: {
    type: FieldType.Chance
  },

  22: {
    type: FieldType.Chance
  },

  36: {
    type: FieldType.Chance
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

  13: {
    title: "Poké Center",
    logo: Poké_Center,
    price: 150,
    color: "#ffff00",
    type: FieldType.Utility
  },

  14: {
    title: "Kyiv",
    price: 160,
    color: "#0043ff",
    type: FieldType.Property
  },

  15: {
    title: "Warsaw Central",
    price: 200,
    type: FieldType.Railway
  },

  16: {
    title: "Cracow",
    price: 180,
    color: "red",
    type: FieldType.Property
  },
  17: {
    type: FieldType.Social
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

  25: {
    title: "Taipei Station",
    price: 200,
    type: FieldType.Railway
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

  28: {
    title: "Poké Mart",
    logo: Poké_Mart,
    price: 150,
    color: "#ffff00",
    type: FieldType.Utility
  },

  27: {
    title: "Tokyo",
    price: 280,
    color: "#ffff00",
    type: FieldType.Property
  },

  31: {
    title: "Delhi",
    price: 300,
    color: "#00c400",
    type: FieldType.Property
  },
  32: {
    title: "Bangalore",
    price: 320,
    color: "#00c400",
    type: FieldType.Property
  },
  33: {
    type: FieldType.Social
  },
  34: {
    title: "Darjeeling",
    price: 300,
    color: "#00c400",
    type: FieldType.Property
  },

  35: {
    title: "Chhatrapati Shivaji Terminus",
    price: 200,
    type: FieldType.Railway
  },

  37: {
    title: "Cape Town",
    price: 350,
    color: "#27ddb6",
    type: FieldType.Property
  },
  39: {
    title: "Pretoria",
    price: 400,
    color: "#27ddb6",
    type: FieldType.Property
  },

  "40": {
    title: "Start",
    type: FieldType.Start
  }
};

export default FieldData;
