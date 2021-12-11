import React from "react";
import { Field } from "../../../interfaces/fields";
import Logo from "./pkp.svg";

interface Props {
  index: number;
  data: Field;
}

const Railway: React.FunctionComponent<Props> = ({
  data: { title, price },
  index
}) => {
  return (
    <div className="content">
      {title ? <span className="title">{title}</span> : null}
      <img src={Logo} />
      {price ? <span className="price">${price}</span> : null}
      <span className="index">{index}</span>
    </div>
  );
};

export default Railway;
