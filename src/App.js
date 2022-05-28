import React, {useState, useEffect} from 'react';

//CSS
import './App.css';
import styled from "styled-components"

//Components
import UpperBlock from './components/game_components/UpperBlock'
import BottomBlock from './components/game_components/BottomBlock'
import Game from './components/game_components/Game'
import Bird from './components/game_components/Bird'
import GameOverScreen from './components/game_components/GameOverScreen';
import Score from './components/game_components/Score';
import GameContainer from './components/game_components/GameContainer';

//Redux
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {updatePosition, gravityEffect, jump} from './components/stores/birdPosition';

//Constants
import {GAME_WIDTH, GAME_HEIGHT, BLOCK_HEIGHT, BLOCK_WIDTH, HOLE, POSITION,  GRAVITY} from './constants/constants'

function App() {
  //Game
  const [gameStarted, setGameStart] = useState(false)
  const [points, setPoints] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  //Block
  const [blockHeight, setBlockHeight] = useState(BLOCK_HEIGHT)
  const [blockPosition, setBlockPosition] = useState(GAME_WIDTH-BLOCK_WIDTH)
  //Bird
  // const [birdPosition, setBirdPosition] = useState(POSITION)

  //redux
  const birdPosition = useSelector((state)=> state.bird.value);
  const dispatch = useDispatch();

  //Block movement
  useEffect(()=>{
    let blockPositionId
    if(gameStarted && !gameOver){
      blockPositionId = setInterval(()=>{
        if(blockPosition < -45){
          let newHeight = Math.random() * (550 - 100) + 100
          setBlockHeight(newHeight)
          setBlockPosition(GAME_WIDTH)
          setPoints(prev => prev + 1)
        }else{
          setBlockPosition(value => value - 7)
        }
      }, 24)
    }
    return () => {
      clearInterval(blockPositionId)
    }
  })

  //Bird movement
  useEffect(()=>{
    let birdPositionId
    if(gameStarted && !gameOver){
      birdPositionId = setInterval(()=>{
        // setBirdPosition(prev => prev + GRAVITY)
        dispatch(gravityEffect())
      }, 24)
    }
    return () => {
      clearInterval(birdPositionId)
    }
  })

  //Collision
  useEffect(()=>{
    const hasColliedWithTopObstacle =  birdPosition >= 0 && birdPosition < blockHeight;
    const hasColliedWithBottomObstacle =  birdPosition <= GAME_HEIGHT && birdPosition >= blockHeight + HOLE ;
    const birdHasCrashed = birdPosition > GAME_HEIGHT;
    
    if(blockPosition >=0 &&
      blockPosition <= BLOCK_WIDTH &&
      (hasColliedWithTopObstacle || hasColliedWithBottomObstacle)
      ){
        setGameStart(()=>false)
        setGameOver(()=>true)
      }else if (birdHasCrashed){
        setGameStart(()=>false)
        setGameOver(()=>true)
      }
  })

  const startGame = () => {
    if(!gameStarted){
      setPoints(()=>0)
      setGameStart(prev=> !prev)
      setGameOver(()=>false)
      setBlockHeight(()=>BLOCK_HEIGHT)
      setBlockPosition(()=>GAME_WIDTH-BLOCK_WIDTH)
      // setBirdPosition(()=>POSITION)
      dispatch(updatePosition(POSITION))
    }
  }

  const birdJump = () => {
    // setBirdPosition(prev => prev - 50)
    if(gameStarted && !gameOver){
      dispatch(jump())
    }
    
  }

  const gameOverScreen = () => {
    if(gameStarted === false){
      return (
        <GameOverScreen>
            <h1 className="title">{!gameOver?'Welcome' : 'You lost!'}</h1>
            <h3 className="score">{!gameOver? null : `Score ${points}`}</h3>
            <button onClick={startGame}>{!gameOver? 'Start Playing' : 'Play Again'}</button>
            <div className="backdrop"></div>
        </GameOverScreen>
      )
    }else{
      return <Score> {points} </Score>
    }
  }
  
  return (
    <GameContainer>
      <Game onClick = {birdJump}>
        <UpperBlock height={blockHeight} position={blockPosition}/>
        <Bird position={birdPosition}/>
        <BottomBlock height={blockHeight} position={blockPosition}/>
        {gameOverScreen()}
      </Game>
    </GameContainer>
  );
}

export default App;
