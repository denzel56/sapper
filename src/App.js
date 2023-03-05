import GameArea from './components/GameArea/GameArea';
import './App.scss';
import GameHeader from './components/GameHader/GameHeader';


function App() {

  return (
    <div className="App">
      <h1>Сапёр</h1>
      <GameHeader />
      <GameArea />
    </div>
  );
}

export default App;
