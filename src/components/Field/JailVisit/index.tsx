import { Field } from "../../../interfaces/fields";

interface Props {
  index: number;
  data: Field;
}

const JailVisit: React.FC<Props> = ({ data: { logo, title }, index }) => {
  return (
    <div className="content">
      <span className="title">{title}</span>
      <img src={logo} />
      <span className="index">{index}</span>
    </div>
  );
};

export default JailVisit;
