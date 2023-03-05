import cn from "classnames";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameStateChange, gameStateChangeSelector } from "../../store/gameStateSlice";
import { mineCounter, mineCounterPlus, mineCounterSelector } from "../../store/mineSlice";

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
];


const Cell = ({ bombNear, x, y, mine, flag, question }) => {
  const dispatch = useDispatch();
  const gameArea = useSelector(gameStateChangeSelector);
  const bombCount = useSelector(mineCounterSelector);
  const [openBomb, setOpenBomb] = useState(false);

  const checkNearBomb = () => {
    let countBomb = 0;

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
  }


  const handleClick = () => {

    if (!gameArea[y][x]) {
      return
    }

    if (flag) {
      return
    }

    if (gameArea[y][x] && openBomb) {
      return
    }

    if (mine) {
      setOpenBomb(true);
    }

    checkNearBomb();
  }

  const handleRightClick = (e) => {
    e.preventDefault();

    if (gameArea[y][x].flag) {
      dispatch(gameStateChange({
        x,
        y,
        flag: false,
        question: true
      }))

      dispatch(mineCounterPlus());
      return
    }

    if (gameArea[y][x].question) {
      dispatch(gameStateChange({
        x,
        y,
        flag: false,
        question: false
      }))

      return
    }

    if (bombCount > 0) {
      dispatch(gameStateChange({
        x,
        y,
        flag: true
      }))
      dispatch(mineCounter());
    }

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
