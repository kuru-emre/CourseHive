import { toast } from 'react-hot-toast'
import { setUser, useAppDispatch } from '../../redux'
import { UserType } from '../../types'

export const useUser = () => {
  const dispatch = useAppDispatch()

  // Fetch user info and rehydrate state
  const refresh = async () => {}

  const register = async (name: string, email: string, password: string) => {
    try {
      // Check if the email exists.

      // If the email already exists, throw an error.

      // throw new Error('Email already exists')

      // If the email does not already exist,
      // query the backend to create the user.

      // TODO: QUERY BACKEND

      // Set the state to the backend's
      // returned user object.

      const user: UserType = {
        _id: '642080f6904b3381618171a3',
        name: 'Test Account',
        email: 'test@gmail.com'
      }

      dispatch(setUser(user))
    } catch (err) {
      console.error(err)
      toast.error((err as any)?.message)
    }
  }

  const login = async (email: string, password: string) => {
    try {
      // Check if the user exists.

      // TODO: QUERY BACKEND

      // If the user doesn't exist, throw an error.

      // throw new Error('User not found')

      // If the user exists, set the state to
      // the backend's returned user object

      const user: UserType = {
        _id: '642080f6904b3381618171a3',
        name: 'Test Account',
        email: 'test@gmail.com'
      }

      dispatch(setUser(user))
    } catch (err) {
      console.error(err)
      toast.error((err as any)?.message)
    }
  }

  const logout = () => {
    dispatch(setUser(undefined))
  }

  return {
    refresh,
    register,
    login,
    logout
  }
}
