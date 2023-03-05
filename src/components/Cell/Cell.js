import cn from "classnames";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameStateChange, gameStateChangeSelector } from "../../store/gameStateSlice";

import s from "./Cell.module.scss";

const numbers = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight'
]


const Cell = ({ bombNear, x, y, mine, flag, question }) => {
  const dispatch = useDispatch();
  const gameArea = useSelector(gameStateChangeSelector);
  const [openBomb, setOpenBomb] = useState(false);


  const handleClick = () => {
    let countBomb = 0;

    if (flag) {
      return
    }

    if (gameArea[y][x] && openBomb) {
      return
    }

    if (mine) {
      setOpenBomb(true);
    }

    if (gameArea[y - 1][x] && gameArea[y - 1][x].mine) {
      countBomb += 1;
    }
    if (gameArea[y - 1][x + 1] && gameArea[y - 1][x + 1].mine) {
      countBomb += 1;
    }
    if (gameArea[y][x + 1] && gameArea[y][x + 1].mine) {
      countBomb += 1;
    }
    if (gameArea[y + 1][x + 1] && gameArea[y + 1][x + 1].mine) {
      countBomb += 1;
    }
    if (gameArea[y + 1][x] && gameArea[y + 1][x].mine) {
      countBomb += 1;
    }
    if (gameArea[y + 1][x - 1] && gameArea[y + 1][x - 1].mine) {
      countBomb += 1;
    }
    if (gameArea[y][x + 1] && gameArea[y][x + 1].mine) {
      countBomb += 1;
    }
    if (gameArea[y - 1][x - 1] && gameArea[y - 1][x - 1].mine) {
      countBomb += 1;
    }

      dispatch(gameStateChange({
        bombNear: numbers[countBomb],
        x,
        y,
      }));

    console.log(numbers[countBomb])
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
          [s[bombNear]]: true,
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
