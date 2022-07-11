import { ActionType } from "../../store/actions";
import { useGameState } from "../../store/context";
import { TurnStage } from "../../store/state";
import styles from "./ControlPanel.module.sass";
import { Link } from "react-router-dom";

const ControlPanel = () => {
  const [{ currentTurn, turn, players, currentPlayer }, dispatch] =
    useGameState();
  const player = players[currentPlayer];
  const { diceResult, canRollAgain, turnStage } = currentTurn;

  const onRoll = () => {
    dispatch({ type: ActionType.RollDice });
  };

  const onMove = () => {
    if (!diceResult) return;

    dispatch({
      type: ActionType.MovePlayer,
      player: currentPlayer,
      fieldCount: diceResult[0] + diceResult[1]
    });
  };

  const onEndTurn = () => {
    if (currentTurn.turnStage !== TurnStage.NoActionsLeft) return;
    dispatch({
      type: ActionType.EndTurn
    });
  };

  return (
    <div className={styles.root}>
      <Link to="/inventory">Inventory</Link>
      <h2>Current player: {player.name}</h2>
      <p>Turn: {turn}</p>
      <p>Balance: ${player.balance}</p>
      <p>
        Dice result:{" "}
        {diceResult ? (
          `${diceResult[0]} and ${diceResult[1]}`
        ) : (
          <span>none</span>
        )}
      </p>
      {turnStage === TurnStage.AfterRoll ? (
        <button onClick={onMove}>Move</button>
      ) : null}
      {!diceResult || canRollAgain ? (
        <button onClick={onRoll}>Roll dice</button>
      ) : null}
      {turnStage === TurnStage.NoActionsLeft ? (
        <button onClick={onEndTurn}>Next player</button>
      ) : null}
    </div>
  );
};

export default ControlPanel;
