import cn from "classnames";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameStateChange, gameStateChangeSelector } from "../../store/gameStateSlice";

import s from "./Cell.module.scss"

const Cell = ({ open, x, y, mine }) => {
  const [flag, setFlag] = useState(false);
  const [question, setQuestion] = useState(false);

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
      setFlag(false);
      setQuestion(true);
      return
    }

    if (question) {
      setQuestion(false);
      return
    }

    setFlag(true);
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
