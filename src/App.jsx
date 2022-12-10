import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "./redux/ducks/user.js"
import './App.css'


export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [])
  const { user } = useSelector(state => state.user)
  console.log(user)

  return (
    <main>
      {JSON.stringify(user)}
    </main>
  )
}
