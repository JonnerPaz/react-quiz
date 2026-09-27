/**
 *
 * @param {{type: string, payload: number}} dispatch
 * @param {number} answer
 * @param {number} index
 * @param {number} numOfQuestions
 * @returns
 */
export default function NextButton({
  dispatch,
  answer,
  index,
  numOfQuestions,
}) {
  if (answer === null) return null

  const curNumOfQuestions = numOfQuestions - 1

  if (index < curNumOfQuestions)
    return (
      <button
        onClick={() => dispatch({ type: 'nextQuestion' })}
        className="btn btn-ui"
      >
        Next
      </button>
    )

  if (index === curNumOfQuestions)
    return (
      <button
        onClick={() => dispatch({ type: 'finish' })}
        className="btn btn-ui"
      >
        Finish
      </button>
    )
}
