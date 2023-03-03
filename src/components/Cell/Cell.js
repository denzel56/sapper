import cn from "classnames";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameStateChange, gameStateChangeSelector } from "../../store/gameStateSlice";

import s from "./Cell.module.scss";

const numbers = {
  0: 'open',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
}

const Cell = ({ bombNear, x, y, mine, flag, question }) => {
  const dispatch = useDispatch();
  const gameArea = useSelector(gameStateChangeSelector);
  const [openBomb, setOpenBomb] = useState(false);


  const handleClick = () => {
    let countBomb = 0;

    if (mine) {
      setOpenBomb(true);
    }

    if (gameArea[y - 1][x].mine) {
      countBomb += 1;
    }
    if (gameArea[y - 1][x + 1].mine) {
      countBomb += 1;
    }
    if (gameArea[y][x + 1].mine) {
      countBomb += 1;
    }
    if (gameArea[y + 1][x + 1].mine) {
      countBomb += 1;
    }
    if (gameArea[y + 1][x].mine) {
      countBomb += 1;
    }
    if (gameArea[y + 1][x - 1].mine) {
      countBomb += 1;
    }
    if (gameArea[y][x + 1].mine) {
      countBomb += 1;
    }
    if (gameArea[y - 1][x - 1].mine) {
      countBomb += 1;
    }

    if (countBomb > 0) {
      dispatch(gameStateChange({
        bombNear: countBomb,
        x,
        y,
      }));
    }
  }

  const handleRightClick = (e) => {
    e.preventDefault();

    if (flag) {
      dispatch(gameStateChange({
        x,
        y,
        flag: false,
        question: true
      }));
      return
    }

    if (question) {
      dispatch(gameStateChange({
        x,
        y,
        question: false
      }));
      return
    }

    dispatch(gameStateChange({
      x,
      y,
      flag: true,
    }));
  }

  return (
    <>
      <div
        className={cn(s.root, {
          // [`s.${numbers[gameArea[y][x].bombNear]}`]: true,
          [s.openBomb]: openBomb,
          [s.flag]: flag,
          [s.question]: question
        })}
        onClick={handleClick}
        onContextMenu={handleRightClick}
      ></div>
    </>
  )
}

export default Cell;
