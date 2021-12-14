import { useCallback } from "react";
import { useForm } from "react-hook-form";
import Layout from "../../Layout";
import { ActionType } from "../../store/actions";
import { useGameState, useGameStateReducer } from "../../store/context";
import styles from "./AddPlayers.module.sass";

interface NewPlayerParams {
  name: string;
  color: string;
}

const AddPlayers = () => {
  const [, dispatch] = useGameState();
  const { register, handleSubmit } = useForm<NewPlayerParams>();

  const addPlayer = useCallback(
    ({ name, color }: NewPlayerParams) => {
      console.log({ name, color });
      dispatch({
        type: ActionType.AddPlayer,
        name,
        color
      });
    },
    [dispatch]
  );

  return (
    <Layout>
      <div className={styles.root}>
        <form onSubmit={handleSubmit(addPlayer)}>
          <h2>Add player</h2>
          <div className="field">
            <label>Name</label>
            <input {...register("name")} />
          </div>

          <div className="field">
            <label>Color</label>
            <input placeholder="red" {...register("color")} />
          </div>

          <button>Add player</button>
        </form>
      </div>
    </Layout>
  );
};

export default AddPlayers;
