import { Field, FieldType } from "../interfaces/fields";
import Poké_Mart from "../components/Field/Utility/Poké_Mart.png";
import Poké_Center from "../components/Field/Utility/Poké_Center.png";
import Meowth from "../components/Field/Tax/Meowth.png";
import JailVisit from "../components/Field/JailVisit/JailVisit.jpg";

export const COUNTRY_COLORS = [
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
    color: COUNTRY_COLORS[0],
    type: FieldType.Property,
    rents: [2, 10, 30, 90, 160, 250],
    housePrice: 50
  },

  2: {
    type: FieldType.Social
  },

  3: {
    title: "Bydgoszcz",
    price: 60,
    color: COUNTRY_COLORS[0],
    type: FieldType.Property,
    rents: [4, 20, 60, 180, 320, 450],
    housePrice: 50
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
    color: COUNTRY_COLORS[1],
    type: FieldType.Property,
    rents: [6, 30, 90, 270, 400, 550],
    housePrice: 50
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
    color: COUNTRY_COLORS[1],
    type: FieldType.Property,
    rents: [8, 40, 100, 300, 450, 600],
    housePrice: 60
  },
  9: {
    title: "Ruse",
    price: 100,
    color: COUNTRY_COLORS[1],
    type: FieldType.Property,
    rents: [6, 30, 90, 270, 400, 550],
    housePrice: 50
  },

  10: {
    image: JailVisit,
    type: FieldType.JailVisit
  },

  11: {
    title: "Lviv",
    price: 140,
    color: COUNTRY_COLORS[2],
    type: FieldType.Property,
    rents: [14, 70, 200, 550, 750, 950],
    housePrice: 100
  },
  12: {
    title: "Kharkiv",
    price: 140,
    color: COUNTRY_COLORS[2],
    type: FieldType.Property,
    housePrice: 100,
    rents: [10, 50, 150, 450, 625, 750]
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
    color: COUNTRY_COLORS[2],
    type: FieldType.Property,
    housePrice: 100,
    rents: [12, 60, 180, 500, 700, 900]
  },

  15: {
    title: "Warsaw Central",
    price: 200,
    type: FieldType.Railway
  },

  16: {
    title: "Cracow",
    price: 180,
    color: COUNTRY_COLORS[3],
    type: FieldType.Property,
    rents: [14, 70, 200, 550, 750, 950],
    housePrice: 100
  },
  17: {
    type: FieldType.Social
  },
  18: {
    title: "Poznań",
    price: 180,
    color: COUNTRY_COLORS[3],
    type: FieldType.Property,
    housePrice: 100,
    rents: [14, 70, 200, 550, 750, 950]
  },
  19: {
    title: "Warsaw",
    price: 200,
    color: COUNTRY_COLORS[3],
    type: FieldType.Property,
    housePrice: 100,
    rents: [16, 80, 220, 600, 800, 1000]
  },

  20: {
    type: FieldType.Parking
  },

  21: {
    title: "Tainan",
    price: 240,
    color: COUNTRY_COLORS[4],
    type: FieldType.Property,
    rents: [20, 100, 300, 750, 925, 1100]
  },
  23: {
    title: "Taichung",
    price: 220,
    color: COUNTRY_COLORS[4],
    type: FieldType.Property,
    rents: [18, 90, 250, 700, 875, 1050]
  },
  24: {
    title: "Taipei",
    price: 220,
    color: COUNTRY_COLORS[4],
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
    color: COUNTRY_COLORS[5],
    type: FieldType.Property,
    housePrice: 150,
    rents: [12, 60, 180, 500, 700, 900]
  },
  29: {
    title: "Kyoto",
    price: 280,
    color: COUNTRY_COLORS[5],
    type: FieldType.Property,
    housePrice: 150,
    rents: [10, 50, 150, 450, 625, 750]
  },

  28: {
    title: "Poké Mart",
    image: Poké_Mart,
    price: 150,
    type: FieldType.Utility
  },

  27: {
    title: "Tokyo",
    price: 280,
    color: COUNTRY_COLORS[5],
    type: FieldType.Property,
    housePrice: 150,
    rents: [14, 70, 200, 550, 750, 950]
  },

  30: {
    type: FieldType.Jail
  },

  31: {
    title: "Delhi",
    price: 300,
    color: COUNTRY_COLORS[6],
    type: FieldType.Property,
    housePrice: 200,
    rents: [16, 80, 220, 600, 800, 1000]
  },

  32: {
    title: "Kolkatta",
    price: 320,
    color: COUNTRY_COLORS[6],
    type: FieldType.Property,
    housePrice: 200,
    rents: [28, 150, 450, 1000, 1200, 1400]
  },

  33: {
    type: FieldType.Social
  },

  34: {
    title: "Bangalore",
    price: 300,
    color: COUNTRY_COLORS[6],
    type: FieldType.Property,
    housePrice: 200,
    rents: [26, 130, 390, 900, 1100, 1275]
  },

  35: {
    title: "Chhatrapati Shivaji Terminus",
    price: 200,
    type: FieldType.Railway
  },

  37: {
    title: "Cape Town",
    price: 350,
    color: COUNTRY_COLORS[7],
    type: FieldType.Property,
    rents: [35, 175, 500, 1100, 1300, 1500],
    housePrice: 200
  },

  38: {
    type: FieldType.Tax,
    price: 100
  },

  39: {
    title: "Pretoria",
    price: 400,
    color: COUNTRY_COLORS[7],
    type: FieldType.Property,
    rents: [50, 200, 600, 1400, 1700, 2000],
    housePrice: 200
  },

  0: {
    title: "Start",
    type: FieldType.Start
  }
};

export default FieldData;
