import "./app.sass";

function App() {
  return (
    <div className="board">
      <div className="board-fields">
        <div className="board-row top">
          {new Array(11).fill(null).map((_, idx) => (
            <div className="field" key={idx}>
              {idx}
            </div>
          ))}
        </div>
        <div className="board-center">
          <div className="board-column left">
            {new Array(9).fill(null).map((_, idx) => (
              <div className="field" key={idx}>
                {idx}
              </div>
            ))}
          </div>
          <div className="board-middle"></div>
          <div className="board-column right">
            {new Array(9).fill(null).map((_, idx) => (
              <div className="field" key={idx}>
                {idx}
              </div>
            ))}
          </div>
        </div>
        <div className="board-row bottom">
          {new Array(11).fill(null).map((_, idx) => (
            <div className="field" key={idx}>
              {idx}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
