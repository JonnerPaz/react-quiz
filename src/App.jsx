import { useEffect, useReducer, useState } from 'react'
import './index.css'
import './App.css'
import Button from '@/components/NextButton'
import Main from '@/components/Main'
import StartScreen from '@/components/StartScreen'
import Progress from '@/components/Progress'
import Question from '@/components/Question'
import Options from '@/components/Option'
import Loader from '@/components/Loader'
import Header from '@/components/Header'

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

// @type StateType = typeof initialState

/**
 * @param state {{questions: string[], status: keyof typeof STATUSES, index: number, answer: number | null, points: number, highscore: number, secondsRemaining: number | null}}
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
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState)
  const maxPossibleQuestions = questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  )

  useEffect(() => {
    fetch('http://localhost:3001/questions')
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: REDUCER_TYPES.dataReceived, payload: data })
      )
      .catch((err) => dispatch({ type: REDUCER_TYPES.dataFailed }))
  }, [])

  return (
    <div className="App">
      <Button />
      {/* If the server is not on, the loading screen will take forever */}
      {status === STATUSES.loading && <Main children={<Loader />} />}
      {status === STATUSES.ready && (
        <StartScreen numQuestions={questions.length} dispatch={dispatch} />
      )}
      {/* TODO: The active state is the one missing. Please implement it */}
    </div>
  )
}

export default App
