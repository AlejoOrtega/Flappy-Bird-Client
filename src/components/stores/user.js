import { createSlice } from '@reduxjs/toolkit'

const initialState = {id: '', username: ''}

export const userSlice = createSlice({
    name: 'user',
    initialState:{ value: initialState },
    reducers:{
        setUserInfo:(state, action) => {
            state.value = action.payload
        },
    }
})

export const {setUserInfo} = userSlice.actions

export default userSlice.reducer;