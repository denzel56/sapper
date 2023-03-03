function useStartGame() {
  const getRandom = (num) => Math.ceil(Math.random() * num);
  let id = 0;
  let newState = [];
  const rows = [];
  for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
      newState.push({
        id,
        mine: false,
        bombNear: 0,
        x: j,
        y: i,
        flag: false,
        question: false
      })
      id++;
    }
    rows[i - 1] = newState;
    newState = [];
  }

  for (let i = 0; i < 40; i++) {
    let x = getRandom(15);
    let y = getRandom(15)
    rows[y][x] = {
      ...rows[y][x],
      mine: true
    }
  }

  return rows;
}

export default useStartGame;
