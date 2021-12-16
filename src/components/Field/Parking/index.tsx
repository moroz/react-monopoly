import { GenericField } from "../../../interfaces/fields";

interface Props {
  index: number;
  data: GenericField;
}

const Parking: React.FC<Props> = ({ data: { image: logo, title }, index }) => {
  return (
    <div className="content">
      <span className="title">{title}</span>
      <div className="img-wrapper">
        <img src={logo} />
      </div>
      <span className="index">{index}</span>
    </div>
  );
};

export default Parking;
