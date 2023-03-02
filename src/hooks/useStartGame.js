function useStartGame() {
  let id = 0;
  let newState = [];
  const rows = [];
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      newState.push({
        id,
        open: false,
        x: j,
        y: i,
        mine: false
      })
      id++;
    }
    rows[i] = newState;
    newState = [];
  }
  return rows;
}

export default useStartGame;
