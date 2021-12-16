import React from "react";
import { Field, FieldType } from "../../interfaces/fields";
import RailwayDeed from "./RailwayDeed";
import RegularPropertyDeed from "./RegularPropertyDeed";

interface Props {
  field: Field;
}

const TitleDeed: React.FC<Props> = ({ field }) => {
  switch (field.type) {
    case FieldType.Property: {
      return <RegularPropertyDeed field={field} />;
    }

    case FieldType.Railway: {
      return <RailwayDeed field={field} />;
    }

    default:
      return null;
  }
};

export default TitleDeed;
