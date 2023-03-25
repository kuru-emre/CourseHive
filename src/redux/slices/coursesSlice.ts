import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CourseType } from '../../types'

type InitialState = {
  courses: CourseType[]
}

const initialState: InitialState = {
  courses: []
}

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<InitialState['courses']>) => {
      state.courses = action.payload
    },
    updateCourses: (state, action: PayloadAction<{ _id: string; course: Partial<CourseType> }>) => {
      state.courses = state.courses.map(course => {
        if (course._id === action.payload._id) {
          return {
            ...course,
            ...action.payload.course
          }
        }

        return course
      })
    },
    addCourse: (state, action: PayloadAction<InitialState['courses'][number]>) => {
      state.courses = [action.payload, ...state.courses]
    },
    removeCourse: (state, action: PayloadAction<string>) => {
      state.courses = state.courses.filter(course => course._id !== action.payload)
    }
  }
})

export const { setCourses, updateCourses, addCourse, removeCourse } = coursesSlice.actions
export default coursesSlice.reducer
