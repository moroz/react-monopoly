import "./app.sass";
import Field from "./components/Field";

function App() {
  return (
    <div className="board">
      <div className="board-fields">
        <div className="board-row top">
          {new Array(11).fill(null).map((_, idx) => (
            <Field index={10 + idx} key={idx} />
          ))}
        </div>
        <div className="board-center">
          <div className="board-column left">
            {new Array(9).fill(null).map((_, idx) => (
              <Field index={9 - idx} key={idx} />
            ))}
          </div>
          <div className="board-middle">
            <span className="game-title">Stereopoly</span>
          </div>
          <div className="board-column right">
            {new Array(9).fill(null).map((_, idx) => (
              <Field index={21 + idx} key={idx} />
            ))}
          </div>
        </div>
        <div className="board-row bottom">
          {new Array(11).fill(null).map((_, idx) => (
            <Field index={40 - idx} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
