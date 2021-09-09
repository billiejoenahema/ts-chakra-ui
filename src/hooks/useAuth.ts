import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router'
import { User } from '../types/api/user'

export const useAuth = () => {
  const history = useHistory()
  const [loading, setLoading] = React.useState(false)

  const login = React.useCallback((id: string) => {
    setLoading(true)
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          history.push('/home')
        } else {
          alert('ユーザーが見つかりません')
        }
      })
      .catch(() => alert('ログインできませんでした'))
      .finally(() => setLoading(false))
  }, [history])
  return { login, loading }
}
