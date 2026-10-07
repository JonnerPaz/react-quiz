import { useEffect, useReducer } from 'react'
import StartScreen from '@/components/StartScreen'
import Progress from '@/components/Progress'
import Question from '@/components/Question'
import Loader from '@/components/Loader'
import Error from '@/components/Error'
import Footer from '@/components/Footer'
import Timer from '@/components/Timer'
import NextButton from '@/components/NextButton'
import FinishScreen from '@/components/FinishScreen'

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
  restart: 'restart',
  tick: 'tick',
}

const SECONDS_PER_QUESTION = 30

const initialState = {
  questions: [],
  status: STATUSES.loading,
  index: 0,
  answer: null,
  points: 0,
  highscore: Number(localStorage.getItem('react_quiz_highscore')) || 0,
  secondsRemaining: null,
}

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
    case REDUCER_TYPES.newAnswer: {
      const question = state.questions[state.index]
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      }
    }
    case REDUCER_TYPES.nextQuestion:
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      }
    case REDUCER_TYPES.finish: {
      const newHighscore = Math.max(state.points, state.highscore)
      localStorage.setItem('react_quiz_highscore', String(newHighscore))
      return {
        ...state,
        status: STATUSES.finished,
        highscore: newHighscore,
      }
    }
    case REDUCER_TYPES.restart:
      return {
        ...initialState,
        questions: state.questions,
        status: STATUSES.ready,
        highscore: state.highscore,
      }
    case REDUCER_TYPES.tick: {
      const isFinished = state.secondsRemaining <= 1
      const newHighscore = isFinished
        ? Math.max(state.points, state.highscore)
        : state.highscore
      if (isFinished) {
        localStorage.setItem('react_quiz_highscore', String(newHighscore))
      }
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: isFinished ? STATUSES.finished : state.status,
        highscore: newHighscore,
      }
    }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

function Quiz() {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState)

  const maxPossiblePoints = questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  )

  useEffect(() => {
    let isMounted = true

    async function loadQuestions() {
      try {
        const res = await fetch('http://localhost:3001/questions')
        if (!res.ok) throw new Error('API server unavailable')
        const data = await res.json()
        if (isMounted) {
          dispatch({ type: REDUCER_TYPES.dataReceived, payload: data })
        }
      } catch {
        // Fallback to local questions.json if API server is offline
        try {
          const local = await import('../../data/questions.json')
          if (isMounted) {
            const data = local.default?.questions || local.questions || []
            dispatch({ type: REDUCER_TYPES.dataReceived, payload: data })
          }
        } catch {
          if (isMounted) {
            dispatch({ type: REDUCER_TYPES.dataFailed })
          }
        }
      }
    }

    loadQuestions()
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="quiz-container">
      {status === STATUSES.loading && <Loader />}
      {status === STATUSES.error && <Error />}
      {status === STATUSES.ready && (
        <StartScreen numQuestions={questions.length} dispatch={dispatch} />
      )}
      {status === STATUSES.active && (
        <>
          <Progress
            index={index}
            numOfQuestions={questions.length}
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            answer={answer}
          />
          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
          <Footer>
            <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              index={index}
              numOfQuestions={questions.length}
            />
          </Footer>
        </>
      )}
      {status === STATUSES.finished && (
        <FinishScreen
          points={points}
          maxPossiblePoints={maxPossiblePoints}
          highscore={highscore}
          dispatch={dispatch}
        />
      )}
    </div>
  )
}

export default Quiz
