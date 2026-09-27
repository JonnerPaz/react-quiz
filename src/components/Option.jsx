export default function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null
  return (
    <div className="options">
      {question.options.map((option, indexOfOption) => (
        <button
          onClick={() =>
            dispatch({ type: 'newAnswer', payload: indexOfOption })
          }
          key={option}
          className={`btn btn-option ${
            indexOfOption === answer ? 'answer' : ''
          } ${
            hasAnswered
              ? indexOfOption === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
