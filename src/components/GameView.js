import React, {useEffect}  from 'react';

//Components
import UpperBlock from './game_components/UpperBlock'
import BottomBlock from './game_components/BottomBlock'
import Game from './game_components/Game'
import Bird from './game_components/Bird'
import GameOverScreen from './game_components/GameOverScreen';
import Score from './game_components/Score';
import Button from './game_components/Button';
import Container from './main_components/Container';

//Redux
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {initialBirdPosition, gravityEffect, jump} from './stores/birdPosition';
import { initialBlockConfig, blockAtEndOfWorld, updateBlockPosition } from './stores/blockConfig';
import {initialPoints, addPoints} from './stores/points';
import { changeGameState, playerHasLost } from './stores/gameState';
import { logOut } from './stores/user';

//Constants
import { GAME_HEIGHT, BLOCK_WIDTH, HOLE} from '../constants/constants'

//Navigation
import { Navigate, useNavigate } from 'react-router-dom';

//fetch
import { postNewScore } from '../fetchs/fetchs';


const GameView = () => {
    //redux variables ----------------------------------
    //GameState
    const {gameStarted, gameOver} =  useSelector(state => state.game.value)
    //Points
    const points =  useSelector(state => state.points.value);
    //Bird
    const birdPosition = useSelector((state)=> state.bird.value);
    //Block
    const  {blockHeight, blockPosition} = useSelector((state)=> state.block.value);
    //User
    const {id, username} = useSelector((state)=> state.user.value)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //useEffect Game Movement ---------------------------
    //Block movement
  useEffect(()=>{
    let blockPositionId
    if(gameStarted && !gameOver){
      blockPositionId = setInterval(()=>{
        if(blockPosition < -45){
          dispatch(blockAtEndOfWorld())
          dispatch(addPoints())
        }else{
          dispatch(updateBlockPosition())
        }
      }, 24)
    }
    return () => {
      clearInterval(blockPositionId)
    }
  }, [gameStarted, gameOver, blockPosition, dispatch])

  //Bird movement
  useEffect(()=>{
    let birdPositionId
    if(gameStarted && !gameOver){
      birdPositionId = setInterval(()=>{
        dispatch(gravityEffect())
      }, 24)
    }
    return () => {
      clearInterval(birdPositionId)
    }
  }, [birdPosition, gameStarted, gameOver, dispatch])

  //Collision
  useEffect(()=>{
    const hasColliedWithTopObstacle =  birdPosition >= 0 && birdPosition < blockHeight;
    const hasColliedWithBottomObstacle =  birdPosition <= GAME_HEIGHT && birdPosition >= blockHeight + HOLE ;
    const birdHasCrashed = birdPosition > GAME_HEIGHT;
    
    if(blockPosition >=0 &&
      blockPosition <= BLOCK_WIDTH &&
      (hasColliedWithTopObstacle || hasColliedWithBottomObstacle) && gameStarted
      ){
        postNewScore(id, points)
        dispatch(changeGameState(false))
        dispatch(playerHasLost(true))

      }else if (birdHasCrashed && gameStarted){

        postNewScore(id, points)
        dispatch(changeGameState(false))
        dispatch(playerHasLost(true))
      }
  }, [birdPosition, blockHeight, blockPosition, dispatch, gameStarted, id, points])

  //In Game Functions --------------------------------------------
  const startGame = () => {
    if(!gameStarted){

      dispatch(changeGameState(true))
      dispatch(playerHasLost(false))
      dispatch(initialPoints())
      dispatch(initialBlockConfig())
      dispatch(initialBirdPosition())
    }
  }

  const onUserSettings = () => {
    navigate('/user_settings')
  }

  const onLeaderBoard = () => {
    navigate('/leader_board')
  }

  const onLogOut = () => {
    dispatch(changeGameState(false))
    dispatch(playerHasLost(false))
    dispatch(initialPoints())
    dispatch(initialBlockConfig())
    dispatch(initialBirdPosition())
    dispatch(logOut())
    navigate('/')
  }

  const birdJump = () => {

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
            <div className='buttons'>
              <Button color='white' textColor='black' onClick={startGame}>{!gameOver? 'Start Playing' : 'Play Again'}</Button>
              <Button color='white' textColor='black' onClick={onLeaderBoard}>Leader Board</Button>
              <Button color='white' textColor='black' onClick={onUserSettings}>User Settings</Button>
              <br/>
              <Button color='#bd0000' textColor='white' onClick={onLogOut}>Log out</Button>
            </div>
            
            <div className="backdrop"></div>
        </GameOverScreen>
      )
    }else{
      return <Score> {points} </Score>
    }
  }
    if(username === ''){
      return <Navigate replace to='/'/>
    }else{
      return ( 
        <Container>
            <Game onClick = {birdJump}>
                <UpperBlock height={blockHeight} position={blockPosition}/>
                <Bird position={birdPosition}/>
                <BottomBlock height={blockHeight} position={blockPosition}/>
                {gameOverScreen()}
            </Game>
        </Container>
      );
    }
}
 
export default GameView;