import cn from 'classnames';

import s from './Timer.module.scss';

const Timer = ({ }) => {
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

export default Timer;
