
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByValue } from './store/slices/counter'

function App() {

  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()



  return (
    <>
      <p> counter is {counter}</p>


      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByValue(2))}>
          Increment by 2
        </button>

      </div>

    </>
  )
}

export default App
