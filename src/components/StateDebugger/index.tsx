import { ActionType } from "../../store/actions";
import { useGameState } from "../../store/context";
import styles from "./StateDebugger.module.sass";

const StateDebugger = () => {
  const [state, dispatch] = useGameState();

  const onReset = () => {
    dispatch({ type: ActionType.ResetGame });
  };

  return (
    <div className={styles.root}>
      <table>
        <tbody>
          <tr>
            <th>Stage:</th>
            <td>{state.stage}</td>
          </tr>
          <tr>
            <th>Current player:</th>
            <td>{state.currentPlayer}</td>
          </tr>
          <tr>
            <th>Turn:</th>
            <td>{state.turn}</td>
          </tr>
          <tr>
            <th>Player count:</th>
            <td>{state.players.length}</td>
          </tr>
        </tbody>
      </table>

      {state.players.map((player) => (
        <>
          <h3>{player.name}</h3>
          <table>
            <tbody>
              <tr>
                <th>Balance:</th>
                <td>${player.balance}</td>
              </tr>
            </tbody>
          </table>
        </>
      ))}

      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default StateDebugger;
