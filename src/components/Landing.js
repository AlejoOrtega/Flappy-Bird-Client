import React, {useState, useEffect} from 'react';
import Container from './landing_components/Container';
import SubContainer from './landing_components/SubContainer';


import RegisterForm from './landing_components/Forms/RegisterForm';
import LoginForm from './landing_components/Forms/LogInForm';

import { postLoginResponse, postCreateNewUser } from '../fetchs/fetchs';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setUserInfo } from './stores/user';



const Landing = () => {
    const [isLogIn, setIsLogIn] = useState(true)
    const [errorStatus, setErrorStatus] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        repeatPassword: ''
    })

    const errorMessages = {
        checkCredentials: 'Double check username and password',
        passwordsNotMatch: 'Passwords does not match',
        userNameTaken: 'This Username is already taken',
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    useEffect(()=>{
        setErrorStatus(false)
        setFormData({
            username: '',
            password: '',
            repeatPassword: ''
        })
    }, [isLogIn])

    const onChangeForm = (e) => {
        let name = e.target.name, value = e.target.value
        if(errorStatus){
            setErrorStatus(()=>false)
        } 
        setFormData({...formData,[name]: value })
    }

    const onLogin = async() => {
        let response  = await postLoginResponse({username: formData.username, password: formData.password})
        
        if(response !== false){
            dispatch(setUserInfo(response[0]))
            navigate('game')
        }else{
            setErrorStatus(()=>true)
            setErrorMessage(errorMessages.checkCredentials)
        }
    }

    const onRegister = async() => {
        if(formData.password !== formData.repeatPassword){
            setErrorStatus(()=>true)
            setErrorMessage(errorMessages.passwordsNotMatch)
        }else{
            let response = await postCreateNewUser({username: formData.username, password: formData.password}) 
            if(response !== false){
                dispatch(setUserInfo(response))
                navigate('game')
            }else{
                setErrorStatus(()=>true)
                setErrorMessage(errorMessages.userNameTaken)
            }
        }
    }

    const onSubmitForm = (e, isRegister) => {
        e.preventDefault()
        if(isRegister){
            onRegister()
        }else{
            onLogin()
        }
        
    }

    return ( 
        <Container>
            <SubContainer>

                {isLogIn? 
                <LoginForm formData={formData} errorStatus={errorStatus} errorMessage={errorMessage} onChangeForm={onChangeForm} onSubmitForm={onSubmitForm} setIsLogIn={setIsLogIn}/> : 
                <RegisterForm formData={formData} errorStatus={errorStatus} errorMessage={errorMessage} onChangeForm={onChangeForm} onSubmitForm={onSubmitForm} setIsLogIn={setIsLogIn}/>}

            </SubContainer>
        </Container>
     );
}
 
export default Landing;