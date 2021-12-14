import { useCallback } from "react";
import { useForm } from "react-hook-form";
import Layout from "../../Layout";
import { ActionType } from "../../store/actions";
import { useGameState, useGameStateReducer } from "../../store/context";
import { PawnType, PlayerParams } from "../../store/state";
import styles from "./AddPlayers.module.sass";
import PawnPicker from "./PawnPicker";

interface NewPlayerParams {
  playerCount: "2" | "3" | "4";
  players: PlayerParams[];
}

const AddPlayers = () => {
  const [, dispatch] = useGameState();
  const { watch, register, handleSubmit } = useForm<NewPlayerParams>({
    defaultValues: {
      playerCount: "2",
      players: [
        { name: "", pawnType: PawnType.Dino },
        { name: "", pawnType: PawnType.Car }
      ]
    }
  });

  const addPlayer = useCallback(
    ({ players }: NewPlayerParams) => {
      dispatch({
        type: ActionType.SetPlayers,
        players
      });
    },
    [dispatch]
  );

  const playerCount = Number(watch("playerCount"));

  return (
    <Layout>
      <div className={styles.root}>
        <form onSubmit={handleSubmit(addPlayer)}>
          <h2>New game</h2>
          <div className={styles.grid}>
            <fieldset className={styles.playerCountGroup}>
              <legend>Number of players</legend>
              <div className={styles.playerCountOptions}>
                {[2, 3, 4].map((n) => (
                  <div className={styles.playerCountOption}>
                    <input
                      type="radio"
                      hidden
                      value={n}
                      key={n}
                      id={`count-${n}`}
                      {...register("playerCount")}
                    />
                    <label htmlFor={`count-${n}`}>{n}</label>
                  </div>
                ))}
              </div>
            </fieldset>

            <div className={styles.players}>
              {new Array(playerCount).fill(null).map((_, i) => (
                <div className={styles.playerGroup}>
                  <h3>Player {i + 1}</h3>

                  <div className={styles.playerRow}>
                    <div className="field">
                      <label>Name</label>
                      <input
                        {...register(`players.${i}.name`, { required: true })}
                      />
                    </div>

                    <PawnPicker index={i} register={register} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button>Start game</button>
        </form>
      </div>
    </Layout>
  );
};

export default AddPlayers;
