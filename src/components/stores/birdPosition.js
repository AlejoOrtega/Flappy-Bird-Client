import { createSlice } from '@reduxjs/toolkit'
import {BIRD_INITIAL_POSITION, GRAVITY, BIRD_JUMP} from '../../constants/constants'

const initialState = BIRD_INITIAL_POSITION

export const birdPositionSlice = createSlice({
    name: 'birdPosition',
    initialState:{ value: initialState },
    reducers:{
        initialBirdPosition:(state) => {
            state.value = BIRD_INITIAL_POSITION
        },
        gravityEffect:(state) => {
            state.value = state.value + GRAVITY
        },
        jump:(state) => {
            state.value = state.value - BIRD_JUMP
        },
    }
})

export const {initialBirdPosition, gravityEffect, jump} = birdPositionSlice.actions

export default birdPositionSlice.reducer;