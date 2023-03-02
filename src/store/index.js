import { configureStore } from "@reduxjs/toolkit";
import gameStateSlice from "./gameStateSlice";
import mineSlice from "./mineSlice";


export const store = configureStore({
  reducer: {
    mine: mineSlice,
    gameState: gameStateSlice,
  }
})
