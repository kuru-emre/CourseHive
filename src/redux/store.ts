import storage from 'redux-persist/lib/storage'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { courseReducer, coursesReducer, settingsReducer, userReducer } from './slices'

const reducers = combineReducers({
  course: courseReducer,
  courses: coursesReducer,
  user: userReducer,
  settings: settingsReducer
})

const persistConfig = {
  key: 'root',
  whitelist: ['user'],
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
