import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PostType } from '../../types'

type InitialState = {
  title: string
  theme: string
  code: string
  posts: PostType[]
}

const initialState: InitialState = {
  title: 'My Cool Course',
  theme: '#5b21b6',
  code: '9982ejs09',
  posts: []
}

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<InitialState['title']>) => {
      state.title = action.payload
    },
    setTheme: (state, action: PayloadAction<InitialState['theme']>) => {
      state.theme = action.payload
    },
    setCode: (state, action: PayloadAction<InitialState['code']>) => {
      state.theme = action.payload
    },
    setPosts: (state, action: PayloadAction<InitialState['posts']>) => {
      state.posts = action.payload
    },
    addPost: (state, action: PayloadAction<InitialState['posts'][number]>) => {
      state.posts = [action.payload, ...state.posts]
    },
  }
})

export const { setTitle, setTheme, setCode, setPosts, addPost } = courseSlice.actions
export default courseSlice.reducer
