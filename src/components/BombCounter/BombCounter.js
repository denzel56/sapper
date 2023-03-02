import { useEffect } from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { mineCounterSelector } from '../../store/mineSlice';
import s from './BombCounter.module.scss';

const numders = [
]

const BombCounter = () => {
  const bombCount = useSelector(mineCounterSelector);
  const bombCountArr = bombCount.toString().split('');

  useEffect(() => {
    console.log(bombCountArr);
    console.log(numders[bombCountArr[0]]);
  }, [])

  return (
    <>
      <div className={s.root}>
        <div className={cn(s.timerCell, {

        })}></div>
        <div className={cn(s.timerCell, {

        })}></div>
        <div className={cn(s.timerCell, {

        })}></div>
      </div>
    </>
  )
}

export default BombCounter;
