import "./app.sass";
import Field from "./components/Field";

function App() {
  return (
    <div className="board">
      <div className="board-fields">
        <div className="board-row north">
          {new Array(11).fill(null).map((_, idx) => (
            <Field index={10 + idx} key={idx} />
          ))}
        </div>
        <div className="board-center">
          <div className="board-column east">
            {new Array(9).fill(null).map((_, idx) => (
              <Field index={9 - idx} key={idx} />
            ))}
          </div>
          <div className="board-middle">
            <span className="game-title">Stereopoly</span>
          </div>
          <div className="board-column west">
            {new Array(9).fill(null).map((_, idx) => (
              <Field index={21 + idx} key={idx} />
            ))}
          </div>
        </div>
        <div className="board-row south">
          {new Array(11).fill(null).map((_, idx) => (
            <Field index={40 - idx} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
