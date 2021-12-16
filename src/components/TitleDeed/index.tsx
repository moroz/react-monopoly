import React from "react";
import { FieldType, Property } from "../../interfaces/fields";
import RailwayDeed from "./RailwayDeed";
import RegularPropertyDeed from "./RegularPropertyDeed";
import UtilityDeed from "./UtilityDeed";

interface Props {
  field: Property;
}

const TitleDeed: React.FC<Props> = ({ field }) => {
  switch (field.type) {
    case FieldType.Property: {
      return <RegularPropertyDeed field={field} />;
    }

    case FieldType.Railway: {
      return <RailwayDeed field={field} />;
    }

    case FieldType.Utility: {
      return <UtilityDeed field={field} />;
    }

    default:
      return null;
  }
};

export default TitleDeed;
