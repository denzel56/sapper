import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  gameAreaState: []
}

export const gameStateSlice = createSlice({
  name: 'gameState',
  initialState,
  reducers: {
    gameStart: (state, action) => {
      state.gameAreaState = action.payload;
    },
    gameStateChange: (state, action) => {
      state.gameAreaState[action.payload.y][action.payload.x] = {
        ...state.gameAreaState[action.payload.y][action.payload.x],
        ...action.payload
      };
    }
  }
})

export const { gameStart, gameStateChange } = gameStateSlice.actions;
export const gameStateChangeSelector = (state) => state.gameState.gameAreaState;
export default gameStateSlice.reducer;
