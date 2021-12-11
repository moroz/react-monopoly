import Charmander from "./charmander.png";

interface Props {
  index: number;
}

const Chance: React.FC<Props> = ({ index }) => {
  return (
    <div className="content">
      <span className="title">Chance</span>
      <div className="img-wrapper">
        <img src={Charmander} />
      </div>
      <span className="index">{index}</span>
    </div>
  );
};

export default Chance;
