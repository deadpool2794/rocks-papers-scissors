import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding: 32px;
  display: flex;
  flex-direction: column;
`

export const ScoreContainer = styled.div`
  border-style: solid;
  border-color: white;
  border-width: 2.5px;
  border-radius: 8px;
  padding: 8px;
  padding-left: 32px;
  padding-right: 32px;
  margin-left: 128px;
  margin-right: 128px;
  display: flex;
  justify-content: space-between;
`

export const HeadingsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  margin: 3px;
  margin-left: 0;
  margin-right: 0;
  color: ${props => props.color};
  font-family: 'Bree Serif';
  font-weight: 500;
  font-size: 28px;
  width: 150px;
`

export const ScoreDisplayContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Score = styled.p`
  font-family: 'Roboto';
  margin: 8px;
  margin-top: 0;
  font-weight: 500;
  font-size: ${props => props.fontSize}px;
  color: #223a5f;
`

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

export const ChoicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 350px;
  height: 300px;
`

export const ResultsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 200px;
`
export const PlayAgainButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const PlayAgainButton = styled.button`
  width: 120px;
  background-color: white;
  border-width: 0;
  color: #223a5f;
  padding: 6px;
  border-radius: 8px;
  font-family: 'Bree serif';
  cursor: pointer;
`
export const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
`
export const ResultHeading = styled.h1`
  text-align: center;
  color: white;
  font-style: 'Roboto';
  font-weight: 500;
  font-size: 26px;
  margin-bottom: 16px;
`
export const ResultText = styled.p`
  text-align: center;
  color: white;
  font-style: 'Roboto';
  font-weight: 500;
  font-size: 26px;
  margin-bottom: 16px;
`
export const PopUpContainer = styled.div`
  height: 8vh;
  display: flex;
  padding-right: 32px;
  justify-content: flex-end;
`

export const RulesButton = styled.button`
  width: 60px;
  
  margin-top: auto;
  margin-bottom: auto
  background-color: white;
  border-width: 0;
  color: #223a5f;
  padding: 6px;
  border-radius: 6px;
  font-family: 'Bree serif';
  cursor: pointer;
`

export const ModalContainer = styled.div`
  width: 70vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`
export const CloseButtonContainer = styled.div`
  width: 100%;
  margin-top: 12px;
  margin-right: 12px;
  height: 20px;
  display: flex;
  justify-content: flex-end;
`

export const CloseButton = styled.button`
  border-width: 0;
`

export const InfoImage = styled.img`
  width: 80%;
`
