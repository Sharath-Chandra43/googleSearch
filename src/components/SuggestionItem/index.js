import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, selectedSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    selectedSearchInput(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <button type="button" className="button" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-image"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
