import { createSlice } from '@reduxjs/toolkit'
import {GAME_WIDTH, BLOCK_HEIGHT, BLOCK_WIDTH, BLOCK_MOVEMENT} from '../../constants/constants'

const initialState = {blockHeight: BLOCK_HEIGHT, blockPosition: GAME_WIDTH - BLOCK_WIDTH}

export const blockConfigSlice = createSlice({
    name: 'blockPosition',
    initialState:{ value: initialState },
    reducers:{
        initialBlockConfig:(state) => {
            state.value = initialState
        },
        blockAtEndOfWorld:(state) => {
            let newHeight = Math.random() * (550 - 100) + 100
            state.value = {blockHeight: newHeight, blockPosition: GAME_WIDTH}
        },
        updateBlockPosition:(state) => {
            let prevPosition = state.value.blockPosition
            state.value = {...state.value, blockPosition: prevPosition - BLOCK_MOVEMENT}
        },
    }
})

export const {initialBlockConfig, blockAtEndOfWorld, updateBlockPosition} = blockConfigSlice.actions

export default blockConfigSlice.reducer;