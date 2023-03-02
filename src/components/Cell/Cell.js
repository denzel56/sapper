import cn from "classnames";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameStateChange, gameStateChangeSelector } from "../../store/gameStateSlice";

import s from "./Cell.module.scss"

const Cell = ({ open, x, y, mine, flag, question }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(gameStateChange({
      open: true,
      x,
      y,
    }));
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
          [s.open]: open,
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
