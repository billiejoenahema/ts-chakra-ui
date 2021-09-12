import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router'
import { User } from '../types/api/user'
import { useLoginUser } from './providers/useLoginUserProvider'
import { useMessage } from './useMessage'

export const useAuth = () => {
  const history = useHistory()
  const showMessage = useMessage()
  const setLoginUser = useLoginUser()

  const [loading, setLoading] = React.useState(false)

  const login = React.useCallback((id: string) => {
    setLoading(true)
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          setLoginUser(res.data)
          showMessage({
            title: 'ログインしました',
            status: 'success'
          })
          history.push('/home')
        } else {
          showMessage({ title: 'ユーザーが見つかりません', status: 'error' })
        }
      })
      .catch(() => {
        showMessage({ title: 'ログインできませんでした', status: 'error' })
        setLoading(false)
      })

  }, [history, showMessage, setLoginUser])
  return { login, loading }
}
