import { UtilityProperty } from "../../../interfaces/fields";

interface Props {
  index: number;
  data: UtilityProperty;
}

const Utility: React.FC<Props> = ({ data: { image, title, price }, index }) => {
  return (
    <div className="content">
      <span className="title">{title}</span>
      <div className="img-wrapper">
        <img src={image} />
      </div>
      <span className="price">${price}</span>
      <span className="index">{index}</span>
    </div>
  );
};

export default Utility;
