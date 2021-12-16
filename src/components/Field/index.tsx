import data from "../../data/field_data";
import clsx from "clsx";
import { FieldType } from "../../interfaces/fields";
import Railway from "./Railway";
import Social from "./Social";
import Chance from "./Chance";
import Utility from "./Utility";
import Tax from "./Tax";
import Jail from "./Jail";
import JailVisit from "./JailVisit";
import Parking from "./Parking";
import PlayerMarkers from "../PlayerMarkers";

interface Props {
  index: number;
}

const FieldTypeToComponent: any = {
  [FieldType.Railway]: Railway,
  [FieldType.Social]: Social,
  [FieldType.Chance]: Chance,
  [FieldType.Utility]: Utility,
  [FieldType.Tax]: Tax,
  [FieldType.Jail]: Jail,
  [FieldType.JailVisit]: JailVisit,
  [FieldType.Parking]: Parking
};

const Field = ({ index }: Props) => {
  const fieldData = (data?.[index] as any) || {};
  const { type, title } = fieldData;
  const longTitle = title?.length && title.length > 10;
  const CustomRenderer = FieldTypeToComponent[String(type)];

  return (
    <div
      className={clsx("field", type, {
        "is-wide": index % 10 === 0,
        "is-property": type === FieldType.Property,
        "is-long": longTitle
      })}
      style={
        type === FieldType.Property
          ? ({
              "--property-color": fieldData?.color
            } as any)
          : undefined
      }
    >
      <div className="field-content">
        {type === FieldType.Property ? (
          <div className="property-color"></div>
        ) : null}
        {CustomRenderer ? (
          <CustomRenderer data={fieldData} index={index} />
        ) : (
          <div className="content">
            {title ? <span className="title">{title}</span> : null}
            {fieldData?.price ? (
              <span className="price">${fieldData.price}</span>
            ) : null}
            <span className="index">{index}</span>
          </div>
        )}
      </div>
      <PlayerMarkers index={index} />
    </div>
  );
};

export default Field;
