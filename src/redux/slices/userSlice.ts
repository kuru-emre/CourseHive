import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '../../types'

type InitialState = {
  user?: UserType
  loading: boolean
}

const initialState: InitialState = {
  loading: true
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<InitialState['user']>) => {
      state.user = action.payload
    },
    setUserLoading: (state, action: PayloadAction<InitialState['loading']>) => {
      state.loading = action.payload
    }
  }
})

export const { setUser, setUserLoading } = userSlice.actions
export default userSlice.reducer
