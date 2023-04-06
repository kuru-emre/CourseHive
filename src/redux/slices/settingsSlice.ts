import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '../../types'

type InitialState = {
  image?: String
  student?: UserType
  students: UserType[]
}

const initialState: InitialState = {
  students: []
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload
    },
    updateImage: () => {},
    removeImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload
    },
    addStudent: (state, action: PayloadAction<UserType>) => {
      state.student = action.payload
    },
    removeStudent: (state, action: PayloadAction<string>) => {
      state.students = state.students.filter((student) => student._id !== action.payload)
    }
  }
})

export const { setImage, updateImage, removeImage, addStudent, removeStudent } = settingsSlice.actions
export default settingsSlice.reducer
