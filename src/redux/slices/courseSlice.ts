import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CourseType, PostType } from '../../types'

type InitialState = {
  course?: CourseType
  isTeacher?: boolean
  posts: PostType[]
}

const initialState: InitialState = {
  posts: []
}

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourse: (state, action: PayloadAction<InitialState['course']>) => {
      state.course = action.payload
    },
    updateCourse: (state, action: PayloadAction<Partial<InitialState['course']>>) => {
      state.course = {
        ...state.course,
        ...(action.payload as any)
      }
    },
    setCoursePosts: (state, action: PayloadAction<InitialState['posts']>) => {
      state.posts = action.payload
    },
    addCoursePost: (state, action: PayloadAction<InitialState['posts'][number]>) => {
      state.posts = [action.payload, ...state.posts]
    },
    removeCoursePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter(post => post._id !== action.payload)
    },
    setCourseIsTeacher: (state, action: PayloadAction<boolean>) => {
      state.isTeacher = action.payload
    }
  }
})

export const {
  setCourse,
  updateCourse,
  setCoursePosts,
  addCoursePost,
  removeCoursePost,
  setCourseIsTeacher
} = courseSlice.actions
export default courseSlice.reducer
