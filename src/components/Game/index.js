import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Choice from '../Choice'
import {
  MainContainer,
  ScoreContainer,
  HeadingsContainer,
  Heading,
  ScoreDisplayContainer,
  Score,
  GameContainer,
  ChoicesContainer,
  ResultsContainer,
  PlayAgainButtonContainer,
  PlayAgainButton,
  ResultHeading,
  ResultItem,
  PopUpContainer,
  RulesButton,
  ModalContainer,
  CloseButtonContainer,
  CloseButton,
  InfoImage,
  ResultText,
} from './styledComponents'

const options = {
  playMode: 'PLAYMODE',
  results: 'RESULTS',
}

const choices = ['ROCK', 'PAPER', 'SCISSORS']

const gameResultOptions = {
  won: 'WON',
  draw: 'DRAW',
  lost: 'LOST',
}

class Game extends Component {
  state = {
    score: 0,
    status: options.playMode,
    userSelection: '',
    opponentSelection: '',
    gameResult: '',
  }

  onChoiceSelected = userSelection => {
    const opponentSelection = choices[Math.floor(Math.random() * 3)]
    if (opponentSelection === userSelection) {
      this.setState({
        userSelection,
        opponentSelection,
        gameResult: gameResultOptions.draw,
        status: options.results,
      })
    } else if (
      (userSelection === choices[0] && opponentSelection === choices[1]) ||
      (userSelection === choices[1] && opponentSelection === choices[2]) ||
      (userSelection === choices[2] && opponentSelection === choices[0])
    ) {
      this.setState(prevState => ({
        userSelection,
        opponentSelection,
        gameResult: gameResultOptions.lost,
        status: options.results,
        score: prevState.score - 1,
      }))
    } else {
      this.setState(prevState => ({
        userSelection,
        opponentSelection,
        gameResult: gameResultOptions.won,
        status: options.results,
        score: prevState.score + 1,
      }))
    }
  }

  onClickPlayAgain = () => {
    this.setState({status: options.playMode})
  }

  renderResults = () => {
    const {userSelection, opponentSelection, gameResult} = this.state
    const {choicesList} = this.props
    const userSelectedItem = choicesList.filter(
      each => each.id === userSelection,
    )[0]
    const opponentSelectedItem = choicesList.filter(
      each => each.id === opponentSelection,
    )[0]
    let resultText
    switch (gameResult) {
      case gameResultOptions.draw:
        resultText = 'IT IS DRAW'
        break
      case gameResultOptions.lost:
        resultText = 'YOU LOSE'
        break
      default:
        resultText = 'YOU WON'
        break
    }
    return (
      <GameContainer>
        <ResultsContainer>
          <ResultItem>
            <ResultHeading>YOU</ResultHeading>
            <Choice item={userSelectedItem} disable altValue="your choice" />
          </ResultItem>
          <ResultItem>
            <ResultHeading>OPPONENT</ResultHeading>
            <Choice
              item={opponentSelectedItem}
              disable
              altValue="opponent choice"
            />
          </ResultItem>
        </ResultsContainer>
        <ResultText>{resultText}</ResultText>
        <PlayAgainButtonContainer>
          <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
            Play Again
          </PlayAgainButton>
        </PlayAgainButtonContainer>
      </GameContainer>
    )
  }

  renderPlayMode = () => {
    const {choicesList} = this.props
    return (
      <GameContainer>
        <ChoicesContainer>
          {choicesList.map(each => (
            <Choice
              item={each}
              key={each.id}
              onChoiceSelected={this.onChoiceSelected}
            />
          ))}
        </ChoicesContainer>
      </GameContainer>
    )
  }

  renderRequired = () => {
    const {status} = this.state
    switch (status) {
      case options.playMode:
        return this.renderPlayMode()
      case options.results:
        return this.renderResults()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state

    return (
      <MainContainer>
        <ScoreContainer>
          <HeadingsContainer>
            <Heading color="white">ROCK PAPER SCISSORS</Heading>
          </HeadingsContainer>
          <ScoreDisplayContainer>
            <Score fontSize="24">Score</Score>
            <Score fontSize="54">{score}</Score>
          </ScoreDisplayContainer>
        </ScoreContainer>
        {this.renderRequired()}
        <PopUpContainer>
          <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
            {close => (
              <>
                <ModalContainer>
                  <CloseButtonContainer>
                    <CloseButton type="button" onClick={close}>
                      <RiCloseLine />
                    </CloseButton>
                  </CloseButtonContainer>
                  <InfoImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </ModalContainer>
              </>
            )}
          </Popup>
        </PopUpContainer>
      </MainContainer>
    )
  }
}

export default Game
