import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

export const pointsSlice = createSlice({
    name: 'points',
    initialState:{ value: initialState },
    reducers:{
        initialPoints:(state) => {
            state.value = initialState
        },
        addPoints:(state) => {
            state.value = state.value + 1
        },
    }
})

export const {initialPoints, addPoints} = pointsSlice.actions

export default pointsSlice.reducer;