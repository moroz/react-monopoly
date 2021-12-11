import { useGameState } from "../../store/context";

const StateDebugger = () => {
  const [state] = useGameState();

  return (
    <div className="state-debugger">
      <table>
        <tbody>
          <tr>
            <th>Current player:</th>
            <td>{state.currentPlayer}</td>
          </tr>
          <tr>
            <th>Turn:</th>
            <td>{state.turn}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StateDebugger;
