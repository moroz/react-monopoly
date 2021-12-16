import { Field, FieldType } from "../interfaces/fields";
import Poké_Mart from "../components/Field/Utility/Poké_Mart.png";
import Poké_Center from "../components/Field/Utility/Poké_Center.png";
import Meowth from "../components/Field/Tax/Meowth.png";
import JailVisit from "../components/Field/JailVisit/JailVisit.jpg";

const countryColors = [
  "#590c38",
  "#87a5d7",
  "#ef3878",
  "#f67e23",
  "#ef3a25",
  "#fee703",
  "#13a55c",
  "#284ea1"
];

const FieldData: Record<number, Field> = {
  1: {
    title: "Sosnowiec",
    price: 60,
    color: countryColors[0],
    type: FieldType.Property
  },

  2: {
    type: FieldType.Social
  },

  3: {
    title: "Bydgoszcz",
    price: 60,
    color: countryColors[0],
    type: FieldType.Property
  },

  4: {
    image: Meowth,
    price: 200,
    type: FieldType.Tax
  },

  5: {
    title: "Gara Sofia",
    price: 200,
    type: FieldType.Railway
  },

  6: {
    title: "Płowdiw",
    price: 100,
    color: countryColors[1],
    type: FieldType.Property,
    rents: [6, 30, 90, 270, 400, 550]
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

  8: {
    title: "Sofia",
    price: 120,
    color: countryColors[1],
    type: FieldType.Property
  },
  9: {
    title: "Ruse",
    price: 100,
    color: countryColors[1],
    type: FieldType.Property,
    rents: [6, 30, 90, 270, 400, 550]
  },

  10: {
    image: JailVisit,
    type: FieldType.JailVisit
  },

  11: {
    title: "Lviv",
    price: 140,
    color: countryColors[2],
    type: FieldType.Property,
    rents: [14, 70, 200, 550, 750, 950]
  },
  12: {
    title: "Kharkiv",
    price: 140,
    color: countryColors[2],
    type: FieldType.Property
  },

  13: {
    title: "Poké Center",
    image: Poké_Center,
    price: 150,
    type: FieldType.Utility
  },

  14: {
    title: "Kyiv",
    price: 160,
    color: countryColors[2],
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
    color: countryColors[3],
    type: FieldType.Property
  },
  17: {
    type: FieldType.Social
  },
  18: {
    title: "Poznań",
    price: 180,
    color: countryColors[3],
    type: FieldType.Property
  },
  19: {
    title: "Warsaw",
    price: 200,
    color: countryColors[3],
    type: FieldType.Property
  },

  21: {
    title: "Tainan",
    price: 240,
    color: countryColors[4],
    type: FieldType.Property,
    rents: [20, 100, 300, 750, 925, 1100]
  },
  23: {
    title: "Taichung",
    price: 220,
    color: countryColors[4],
    type: FieldType.Property,
    rents: [18, 90, 250, 700, 875, 1050]
  },
  24: {
    title: "Taipei",
    price: 220,
    color: countryColors[4],
    type: FieldType.Property,
    rents: [18, 90, 250, 700, 875, 1050]
  },

  25: {
    title: "Taipei Station",
    price: 200,
    type: FieldType.Railway
  },

  26: {
    title: "Hiroshima",
    price: 260,
    color: countryColors[5],
    type: FieldType.Property
  },
  29: {
    title: "Kyoto",
    price: 280,
    color: countryColors[5],
    type: FieldType.Property
  },

  28: {
    title: "Poké Mart",
    image: Poké_Mart,
    price: 150,
    color: "#ffff00",
    type: FieldType.Utility
  },

  27: {
    title: "Tokyo",
    price: 280,
    color: countryColors[5],
    type: FieldType.Property
  },

  31: {
    title: "Delhi",
    price: 300,
    color: countryColors[6],
    type: FieldType.Property
  },
  32: {
    title: "Bangalore",
    price: 320,
    color: countryColors[6],
    type: FieldType.Property
  },
  33: {
    type: FieldType.Social
  },
  34: {
    title: "Darjeeling",
    price: 300,
    color: countryColors[6],
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
    color: countryColors[7],
    type: FieldType.Property
  },
  39: {
    title: "Pretoria",
    price: 400,
    color: countryColors[7],
    type: FieldType.Property
  },

  "40": {
    title: "Start",
    type: FieldType.Start
  }
};

export default FieldData;
