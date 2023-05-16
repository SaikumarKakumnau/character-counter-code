import {Component} from 'react'
import {v4} from 'uuid'

import './App.css'

// Replace your code here
class App extends Component {
  state = {wordInput: '', wordsList: []}

  onChangeTextInput = event => {
    this.setState({wordInput: event.target.value})
  }

  onAddUserInput = event => {
    event.preventDefault()
    const {wordInput} = this.state

    const newWord = {
      id: v4(),
      word: wordInput,
      wordCount: wordInput.length,
    }

    this.setState(preState => ({
      wordsList: [...preState.wordsList, newWord],
      wordInput: '',
    }))
  }

  render() {
    const {wordInput, wordsList} = this.state
    return (
      <div className="bg-container">
        <div className="counter-container">
          <div className="counter-heading-container">
            <h1 className="counter-heading">
              Count the characters like a Boss...
            </h1>
          </div>
          <>
            {wordsList.length !== 0 ? (
              <ul className="character-list-container">
                {wordsList.map(eachInput => (
                  <li key={eachInput.id}>
                    <p className="user-input">
                      {eachInput.word} : {eachInput.wordCount}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="img"
                />
              </div>
            )}
          </>
        </div>
        <div className="input-container">
          <h1 className="input-heading">Character Counter</h1>
          <form className="search-container" onSubmit={this.onAddUserInput}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              className="input"
              value={wordInput}
              onChange={this.onChangeTextInput}
            />
            <button type="submit" className="btn-style">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
