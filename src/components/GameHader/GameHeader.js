import BombCounter from '../BombCounter/BombCounter';
import Smile from '../Smile/Smile';
import Timer from '../Timer/Timer';
import s from './GameHeader.module.scss';


const GameHeader = () => {
  return (
    <>
      <div className={s.root}>
        <BombCounter />
        <Smile />
        <Timer />
      </div>
    </>
  )
}

export default GameHeader;
