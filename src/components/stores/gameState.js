import { createSlice } from '@reduxjs/toolkit'

const initialState = {gameStarted: false, gameOver: false}

export const gameStateSlice = createSlice({
    name: 'gameState',
    initialState:{ value: initialState },
    reducers:{
        changeGameState:(state, action) => {
            state.value = {...state.value, gameStarted: action.payload}
        },
        playerHasLost:(state, action) => {
            state.value = {...state.value, gameOver: action.payload}
        },
    }
})

export const {changeGameState, playerHasLost} = gameStateSlice.actions

export default gameStateSlice.reducer;