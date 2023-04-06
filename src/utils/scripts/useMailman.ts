import { toast } from 'react-hot-toast'
import { useAppSelector } from '../../redux'

export const useMailman = () => {
  const { user } = useAppSelector(state => state.user)

  const mailman = async (
    route: 'courses' | 'users' | 'posts' | 'settings',
    endpoint: string,
    method: 'POST' | 'GET' | 'DELETE' | 'PUT' = 'GET',
    body?: Object
  ) => {
    try {
      const serverURL = import.meta.env.VITE_SERVER_URL

      const response = await fetch(`${serverURL}${route}/${endpoint}`, {
        method,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'User-Id': user?._id || '',
          Accept: 'application/json'
        },
        body: JSON.stringify(body)
      })

      const json = await response.json()

      if (!response.ok) {
        throw new Error(json?.message)
      }

      return json
    } catch (err) {
      console.error(err)
      toast.error((err as any)?.message)
    }
  }

  return {
    mailman
  }
}
