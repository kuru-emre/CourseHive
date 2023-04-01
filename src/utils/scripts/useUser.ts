// Author: Dhruvil Trivedi

import { toast } from 'react-hot-toast'
import { setUser, useAppDispatch } from '../../redux'
import { UserType } from '../../types'
import { useMailman2 } from './useMailman2'

export const useUser = () => {
  const dispatch = useAppDispatch()
  const { mailman2 } = useMailman2()

  // Fetch user info and rehydrate state
  const refresh = async () => {}

  const register = async (_id: string, name: string, email: string, eduName: string, password: string) => {
    try {
      const data = {_id,name,email,eduName,password}
      dispatch(setUser(data))
      await mailman2('registration','POST',data)
    } catch (err) {
      console.error(err)
      toast.error((err as any)?.message)
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const user: UserType = {
        _id: '12234',
        name: 'Test Account',
        email: 'test@gmail.com',
        password: '123445',
        eduName: 'dal'
      }

      dispatch(setUser(user))
      await fetch(`http://localhost:8000/login/${email}`);
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
