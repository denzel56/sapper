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
    dispatch(gameStart(start));
  }, [dispatch])


  return (
    <>
      <div className={s.root}>
        {
          gameState.length > 0 && gameState[0].map((item) => {
            return (
              <Cell
                key={item.id}
                bombNear={item.bombNear}
                x={item.x}
                y={item.y}
                mine={item.mine}
                flag={item.flag}
                question={item.question}
              />
            )
          })
        }
        {
          gameState.length > 0 && gameState[1].map((item) => {
            return (
              <Cell
                key={item.id}
                bombNear={item.bombNear}
                x={item.x}
                y={item.y}
                mine={item.mine}
                flag={item.flag}
                question={item.question}
              />
            )
          })
        }
        {
          gameState.length > 0 && gameState[2].map((item) => {
            return (
              <Cell
                key={item.id}
                bombNear={item.bombNear}
                x={item.x}
                y={item.y}
                mine={item.mine}
                flag={item.flag}
                question={item.question}
              />
            )
          })
        }
        {
          gameState.length > 0 && gameState[3].map((item) => {
            return (
              <Cell
                key={item.id}
                bombNear={item.bombNear}
                x={item.x}
                y={item.y}
                mine={item.mine}
                flag={item.flag}
                question={item.question}
              />
            )
          })
        }
        {
          gameState.length > 0 && gameState[4].map((item) => {
            return (
              <Cell
                key={item.id}
                bombNear={item.bombNear}
                x={item.x}
                y={item.y}
                mine={item.mine}
                flag={item.flag}
                question={item.question}
              />
            )
          })
        }
        {
          gameState.length > 0 && gameState[5].map((item) => {
            return (
              <Cell
                key={item.id}
                bombNear={item.bombNear}
                x={item.x}
                y={item.y}
                mine={item.mine}
                flag={item.flag}
                question={item.question}
              />
            )
          })
        }
        {
          gameState.length > 0 && gameState[6].map((item) => {
            return (
              <Cell
                key={item.id}
                bombNear={item.bombNear}
                x={item.x}
                y={item.y}
                mine={item.mine}
                flag={item.flag}
                question={item.question}
              />
            )
          })
        }
        {
          gameState.length > 0 && gameState[7].map((item) => {
            return (
              <Cell
                key={item.id}
                bombNear={item.bombNear}
                x={item.x}
                y={item.y}
                mine={item.mine}
                flag={item.flag}
                question={item.question}
              />
            )
          })
        }
        {
          gameState.length > 0 && gameState[8].map((item) => {
            return (
              <Cell
                key={item.id}
                bombNear={item.bombNear}
                x={item.x}
                y={item.y}
                mine={item.mine}
                flag={item.flag}
                question={item.question}
              />
            )
          })
        }
        {
          gameState.length > 0 && gameState[9].map((item) => {
            return (
              <Cell
                key={item.id}
                bombNear={item.bombNear}
                x={item.x}
                y={item.y}
                mine={item.mine}
                flag={item.flag}
                question={item.question}
              />
            )
          })
        }
        {
          gameState.length > 0 && gameState[10].map((item) => {
            return (
              <Cell
                key={item.id}
                bombNear={item.bombNear}
                x={item.x}
                y={item.y}
                mine={item.mine}
                flag={item.flag}
                question={item.question}
              />
            )
          })
        }
        {
          gameState.length > 0 && gameState[11].map((item) => {
            return (
              <Cell
                key={item.id}
                bombNear={item.bombNear}
                x={item.x}
                y={item.y}
                mine={item.mine}
                flag={item.flag}
                question={item.question}
              />
            )
          })
        }
        {
          gameState.length > 0 && gameState[12].map((item) => {
            return (
              <Cell
                key={item.id}
                bombNear={item.bombNear}
                x={item.x}
                y={item.y}
                mine={item.mine}
                flag={item.flag}
                question={item.question}
              />
            )
          })
        }
        {
          gameState.length > 0 && gameState[13].map((item) => {
            return (
              <Cell
                key={item.id}
                bombNear={item.bombNear}
                x={item.x}
                y={item.y}
                mine={item.mine}
                flag={item.flag}
                question={item.question}
              />
            )
          })
        }
        {
          gameState.length > 0 && gameState[14].map((item) => {
            return (
              <Cell
                key={item.id}
                bombNear={item.bombNear}
                x={item.x}
                y={item.y}
                mine={item.mine}
                flag={item.flag}
                question={item.question}
              />
            )
          })
        }
        {
          gameState.length > 0 && gameState[15].map((item) => {
            return (
              <Cell
                key={item.id}
                bombNear={item.bombNear}
                x={item.x}
                y={item.y}
                mine={item.mine}
                flag={item.flag}
                question={item.question}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default GameArea;
