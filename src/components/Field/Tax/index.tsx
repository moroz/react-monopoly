import { GenericField } from "../../../interfaces/fields";

interface Props {
  index: number;
  data: GenericField;
}

const Tax: React.FC<Props> = ({
  data: { image: logo, title, price },
  index
}) => {
  return (
    <div className="content">
      <span className="title">
        Income
        <br />
        Tax
      </span>
      <div className="img-wrapper">
        <img src={logo} />
      </div>
      <span className="price">${price}</span>
      <span className="index">{index}</span>
    </div>
  );
};

export default Tax;
