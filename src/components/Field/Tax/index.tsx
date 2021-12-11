import { Field } from "../../../interfaces/fields";

interface Props {
  index: number;
  data: Field;
}

const Tax: React.FC<Props> = ({ data: { logo, title, price }, index }) => {
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
