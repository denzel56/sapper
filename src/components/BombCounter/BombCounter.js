import { useEffect } from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { mineCounterSelector } from '../../store/mineSlice';
import s from './BombCounter.module.scss';

const numbers = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
]

const BombCounter = () => {
  const bombCount = useSelector(mineCounterSelector);
  const bombCountArr = bombCount.toString().split('');

  if (bombCountArr.length < 3) {
    bombCountArr.unshift('0');
  }

  if (bombCount < 10) {
    bombCountArr.unshift('0');
  }

  return (
    <>
      <div className={s.root}>
        <div className={cn(s.timerCell, {
          [s[numbers[bombCountArr[0]]]]: true,
        })}></div>
        <div className={cn(s.timerCell, {
          [s[numbers[bombCountArr[1]]]]: true,
        })}></div>
        <div className={cn(s.timerCell, {
          [s[numbers[bombCountArr[2]]]]: true,
        })}></div>
      </div>
    </>
  )
}

export default BombCounter;
