import { useState, useEffect } from 'react'
import { onAuthStateChanged } from '../firebase/client'
import { useRouter } from 'next/router'

export const USER_STATE = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined
}

export default function useUser () {
  const [user, setUser] = useState(USER_STATE.NOT_KNOWN)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  useEffect(() => {
    user === USER_STATE.NOT_LOGGED && router.push('/')
  }, [user])

  return user
}
