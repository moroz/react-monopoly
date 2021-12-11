import { Field } from "../../../interfaces/fields";

interface Props {
  index: number;
  data: Field;
}

const JailVisit: React.FC<Props> = ({ data: { logo, title }, index }) => {
  return (
    <div className="content">
      <span className="index">{index}</span>
      <span className="title-top">Visiting</span>
      <span className="title-left">Just</span>
      <div className="img-wrapper">
        <img src={logo} />
      </div>
    </div>
  );
};

export default JailVisit;
