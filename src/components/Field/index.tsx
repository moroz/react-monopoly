import data from "../../data/field_data";
import clsx from "clsx";
import { FieldType } from "../../interfaces/fields";

interface Props {
  index: number;
}

const Field = ({ index }: Props) => {
  const fieldData = data?.[index] || {};
  const { type, title, color } = fieldData;
  return (
    <div
      className={clsx("field", {
        "is-wide": index % 10 === 0,
        "is-property": type === FieldType.Property
      })}
      style={
        {
          "--property-color": color
        } as any
      }
    >
      {type === FieldType.Property ? (
        <div className="property-color"></div>
      ) : null}
      <div className="content">
        {title ? <span className="title">{title}</span> : null}
        <span className="index">{index}</span>
      </div>
    </div>
  );
};

export default Field;
