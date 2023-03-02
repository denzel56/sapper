import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameStateChangeSelector, gameStart } from "../../store/gameStateSlice";
import useStartGame from "../../hooks/useStartGame";
import Cell from "../Cell/Cell";

import s from "./GameArea.module.scss";

const GameArea = () => {
  const gameState = useSelector(gameStateChangeSelector);
  const dispatch = useDispatch();
  const start = useStartGame();

  useEffect(() => {
    console.log(start);
    dispatch(gameStart(start));
  }, [])

  return (
    <>
      <div className={s.root}>
        {
          // gameState[0].map((item) => {
          //   return (
          //     <Cell
          //       open={item.open}
          //       x={item.x}
          //       y={item.y}
          //       mine={item.mine}
          //     />
          //   )
          // })
        }
      </div>
    </>
  )
}

export default GameArea;
