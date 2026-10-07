import NextButton from './NextButton'
import Timer from './Timer'

export default function Footer({
  children,
  index,
  numOfQuestions,
  dispatch,
  answer,
  secondsRemaining,
}) {
  return (
    <footer className="quiz-footer">
      {children || (
        <>
          <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
          <NextButton
            index={index}
            numOfQuestions={numOfQuestions}
            dispatch={dispatch}
            answer={answer}
          />
        </>
      )}
    </footer>
  )
}
