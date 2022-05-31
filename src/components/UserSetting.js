import React, {useState, useEffect} from 'react';
import Container from './main_components/Container';
import Section from './main_components/Section';
import StyledTable from './main_components/StyledTable';
import ProfilePicture from './main_components/ProfilePicture';
import flappyGif from '../img/flappyGif.gif'
import previous from '../img/left-arrow.png'
import Content from './main_components/Content';
import Button from './main_components/Button';
import Input from './landing_components/Input';
import {initialBirdPosition} from './stores/birdPosition';
import { initialBlockConfig} from './stores/blockConfig';
import {initialPoints} from './stores/points';
import { changeGameState, playerHasLost } from './stores/gameState';
import { logOut, setUserInfo } from './stores/user';
import { patchUserName, deleteUser } from '../fetchs/fetchs';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { getUserScores } from '../fetchs/fetchs';

const UserSetting = () => {
    const [isDataNull, setIsDataNull] = useState(false)
    const [newUserName, setNewUserName] = useState('')
    const [data , setData] = useState([{Top: '',
                                        Score: '',
                                        Date: ''}])
    const {id, username} = useSelector(state => state.user.value)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchData = async () => {
            let response = await getUserScores(id)
            if(response.length === 0){
                setIsDataNull(true)
            }else if(response !== false){
                response.forEach((info, index)=>{
                    info['Top'] = info['user_id'];
                    info['Top'] = index + 1;
                    delete info['user_id'];
                    info['Score'] = info['score'];
                    delete info['score'];
                    info['Date'] = info['created_at'];
                    info['Date'] = info['created_at'].substring(0,10)
                    delete info['created_at'];
                })
                
                setData(()=> [...response])
            }
        }

        fetchData()
        
    },[id])

    const onReturn = () => {
        navigate(-1)
    }

    const onDelete = async() => {
        let confirm = window.confirm("Are you sure you want to delete your account?")
        if(confirm){
            let response = await deleteUser(id)
            if(response !== false){
                dispatch(changeGameState(false))
                dispatch(playerHasLost(false))
                dispatch(initialPoints())
                dispatch(initialBlockConfig())
                dispatch(initialBirdPosition())
                dispatch(logOut())
                navigate('/')
            }
        }
        
    }

    const onChangeUserName =  async() => {
        if (newUserName === ''){
            window.alert("To change your username, change you user and click change")
        }else{
            const confirmBox = window.confirm(
                "Do you really want to change your username?"
              )
            if (confirmBox){
                let response = await patchUserName(id, newUserName)
                if(response){
                    dispatch(setUserInfo({id: id, username: newUserName}))
                    setNewUserName('')
                } 
            }
        }
    }


    if(username === ''){
        return <Navigate replace to='/'/>
      }else{
        return ( 
            <Container>
                <Section>
                    <Content>
                        <div style={{display: 'flex', alignItems: 'end', marginBottom: '50px'}}>
                            <img src={previous} alt='back button' width='40px' height='40px' onClick={onReturn}/>
                            <h1 style={{alignSelf: 'center',fontFamily: 'PixelarRegularW01-Regular', fontSize: '52px', marginLeft:'90px', color:'white'}}>User Settings</h1>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems:'center', marginBottom: '40px'}}>
                            <ProfilePicture alt='Flappy Bird' src={flappyGif}/>
                            <Input backgroundColor='white' margin={0} color='black' placeholderColor='black' name='username' type='text' width='100px' placeholder={username} overflowY='hidden' value={newUserName} onChange={(e)=>setNewUserName(e.target.value)}/>
                            <Button color={'white'} textColor={'black'} onClick={onChangeUserName}>Change Username</Button>
                            <Button color={'#bd0000'} textColor={'white'} onClick={onDelete}>Delete Account</Button>
                        </div>
                        <div className='score-table'>
                            {isDataNull?null:<StyledTable data={data} numOfCol={3}/>}
                        </div>
                    </Content>
                </Section>
            </Container>
        );
    }
}
 
export default UserSetting;