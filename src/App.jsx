import { useState } from 'react'
import './App.css'

// these constants are important states for the app
// represent the lifecycle of the app
// If you need to edit them, please do so with care

const STATUSES = {
  loading: 0,
  error: 1,
  ready: 2,
  active: 3,
  finished: 4,
}

const REDUCER_TYPES = {
  dataReceived: 'dataReceived',
  dataFailed: 'dataFailed',
  start: 'start',
  newAnswer: 'newAnswer',
  nextQuestion: 'nextQuestion',
  finish: 'finish',
}

const SECONDS_PER_QUESTION = 30
const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: STATUSES.loading,
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
}

/**
 * @param state {{count: number, step: number}}
 * @param action {{type: keyof typeof REDUCER_TYPES, payload: number}}
 * @description - Reducer function for useReducer. **This is the heart of the app**
 */
function reducer(state, action) {
  switch (action.type) {
    case REDUCER_TYPES.dataReceived:
      return {
        ...state,
        questions: action.payload,
        status: STATUSES.ready,
      }
    case REDUCER_TYPES.dataFailed:
      return { ...state, status: STATUSES.error }
    case REDUCER_TYPES.start:
      return {
        ...state,
        status: STATUSES.active,
        secondsRemaining: state.questions.length * SECONDS_PER_QUESTION,
      }
    default:
      throw new Error('unknown action')
  }
}

function App() {
  const [status, setStatus] = useState(0)
  const [questions, setQuestions] = useState([])
  const maxPossibleQuestions = questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  )

  return (
    <div className="App">
      <main className="main">Hello, world!</main>
    </div>
  )
}

export default App
