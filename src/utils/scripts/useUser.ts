// Author: Dhruvil Trivedi

import { toast } from 'react-hot-toast'
import { setUser, useAppDispatch } from '../../redux'
import { UserType } from '../../types'
import { useMailman } from '.'

export const useUser = () => {
  const dispatch = useAppDispatch()
  const { mailman } = useMailman()

  // Fetch user info and rehydrate state
  const refresh = async () => {}

  const register = async (name: string, email: string, institution: string, password: string) => {
    try {
      const userData = { name, email, institution, password }
      const data = await mailman('users', 'register', 'POST', userData)

      if (!data?.user) {
        return
      }

      dispatch(setUser(data.user))
    } catch (err) {
      console.error(err)
      toast.error((err as any)?.message)
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const userData = { email, password }
      const data = await mailman('users', 'login', 'POST', userData)

      if (!data?.user) {
        return
      }

      dispatch(setUser(data.user))
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
