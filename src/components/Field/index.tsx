import data from "../../data/field_data";
import clsx from "clsx";
import { FieldType } from "../../interfaces/fields";
import Railway from "./Railway";
import Social from "./Social";
import Chance from "./Chance";
import PlayerMarkers from "../PlayerMarkers";

interface Props {
  index: number;
}

const FieldTypeToComponent: any = {
  [FieldType.Railway]: Railway,
  [FieldType.Social]: Social,
  [FieldType.Chance]: Chance
};

const Field = ({ index }: Props) => {
  const fieldData = data?.[index] || {};
  const { type, title, color, price } = fieldData;
  const longTitle = title?.length && title.length > 10;
  const CustomRenderer = FieldTypeToComponent[type];

  return (
    <div
      className={clsx("field", type, {
        "is-wide": index % 10 === 0,
        "is-property": type === FieldType.Property,
        "is-long": longTitle
      })}
      style={
        {
          "--property-color": color
        } as any
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
            {price ? <span className="price">${price}</span> : null}
            <span className="index">{index}</span>
          </div>
        )}
      </div>
      <PlayerMarkers index={index} />
    </div>
  );
};

export default Field;
