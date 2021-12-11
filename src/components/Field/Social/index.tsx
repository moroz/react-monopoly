import Pikachu from "./Pikachu.png";

interface Props {
  index: number;
}

const Social: React.FC<Props> = ({ index }) => {
  return (
    <div className="content">
      <span className="title">
        Community
        <br />
        Chest
      </span>
      <div className="img-wrapper">
        <img src={Pikachu} />
      </div>
      <span className="index">{index}</span>
    </div>
  );
};

export default Social;
