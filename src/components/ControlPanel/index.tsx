import { useState } from "react";
import { ActionType } from "../../store/actions";
import { useGameState } from "../../store/context";
import styles from "./ControlPanel.module.sass";
import { rollDice } from "./dices";

const ControlPanel = () => {
  const [{ turn, players, currentPlayer }, dispatch] = useGameState();
  const player = players[currentPlayer];
  const [diceResult, setDiceResult] = useState<[number, number] | null>(null);
  const [moved, setMoved] = useState(false);

  const onRoll = () => {
    setDiceResult(rollDice());
    setMoved(false);
  };

  const onMove = () => {
    if (!diceResult) return;

    dispatch({
      type: ActionType.MovePlayer,
      player: currentPlayer,
      fieldCount: diceResult[0] + diceResult[1]
    });
    setMoved(true);
  };

  const canMoveAgain = diceResult && diceResult[0] === diceResult[1] && moved;
  const canEndTurn = moved && !canMoveAgain;

  const onEndTurn = () => {
    if (!canEndTurn) return;
    dispatch({
      type: ActionType.EndTurn
    });
    setMoved(false);
    setDiceResult(null);
  };

  return (
    <div className={styles.root}>
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
      {diceResult && !moved ? <button onClick={onMove}>Move</button> : null}
      {!diceResult || canMoveAgain ? (
        <button onClick={onRoll}>Roll dice</button>
      ) : null}
      {!canMoveAgain && moved ? (
        <button onClick={onEndTurn}>Next player</button>
      ) : null}
    </div>
  );
};

export default ControlPanel;
