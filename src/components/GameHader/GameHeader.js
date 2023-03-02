import BombCounter from '../BombCounter/BombCounter';
import s from './GameHeader.module.scss';


const GameHeader = () => {
  return (
    <>
      <div className={s.root}>
        <BombCounter />
      </div>
    </>
  )
}

export default GameHeader;
