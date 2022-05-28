import { createSlice } from '@reduxjs/toolkit'
import {POSITION, GRAVITY, BIRD_JUMP} from '../../constants/constants'

const initialState = POSITION

export const birdPositionSlice = createSlice({
    name: 'birdPosition',
    initialState:{ value: initialState },
    reducers:{
        updatePosition:(state, action) => {
            state.value = action.payload
        },
        gravityEffect:(state) => {
            state.value = state.value + GRAVITY
        },
        jump:(state) => {
            state.value = state.value - BIRD_JUMP
        },
    }
})

export const {updatePosition, gravityEffect, jump} = birdPositionSlice.actions

export default birdPositionSlice.reducer;