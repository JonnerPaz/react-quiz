import Options from './Option'

export default function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options dispatch={dispatch} question={question} answer={answer} />
    </div>
  )
}
