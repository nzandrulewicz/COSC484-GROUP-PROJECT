import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import TodoForm from '../components/TodoForm'
import TodoItem from '../components/TodoItem'
import Spinner from '../components/Spinner'
import { getTodos, reset } from '../features/todos/todoSlice'



function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)

  const { todos, isLoading, isError, message } = useSelector(
    (state) => state.todos
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if(!user) {
      navigate('/home')
    }

    dispatch(getTodos())

    return () => {
      dispatch(reset())
    }

  }, [user, navigate, isError, message, dispatch])
    
  if(isLoading){
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h2>Welcome to Your Quest</h2>
        <h1>{user && user.username}</h1>
        <p>Quest Dashboard</p>
      </section>

      <TodoForm />

      <section className='content'>
        {todos.length > 0 ? (
            <div className='todos'>
              {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </div>
          ) : (
            <h3>No Todos. Start Your Quest!</h3>
          )}
      </section>

    </>
  )
}

export default Dashboard