import {ChoiceButton, ChoiceImage} from './styledComponents'

const Choice = props => {
  const {item, onChoiceSelected, disable, altValue} = props
  const {id, imageUrl} = item
  const onClickChoiceSelected = () => {
    onChoiceSelected(id)
  }
  const testId = id.toLowerCase()
  let required
  if (altValue === undefined) {
    required = id
  } else {
    required = altValue
  }

  return (
    <ChoiceButton
      type="button"
      disabled={disable}
      onClick={onClickChoiceSelected}
      data-testid={`${testId}Button`}
    >
      <ChoiceImage src={imageUrl} alt={required} />
    </ChoiceButton>
  )
}

export default Choice
