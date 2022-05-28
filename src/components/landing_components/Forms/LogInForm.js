import React from 'react';
import Input from '../Input';
import Button from '../Button';
import Title from '../Title';
import Text from '../Text';

import {useNavigate} from 'react-router-dom'

const LoginForm = ({setIsLogIn}) => {

    const {username, password} = ''
    const navigate = useNavigate()

    const onChangeForm = () => {

    } 
    const onSubmitForm = () => {
        navigate('game')
    }

    return ( 
    <>
        <Title> Flappy Bird Sinatra </Title>
        <form className='form' onSubmit={onSubmitForm}>
            <Input name='username' type='text' placeholder='username' value={username} onChange={onChangeForm}/>
            <Input name='password' type='password' placeholder='password' value={password} onChange={onChangeForm}/>
            <Button>Submit</Button>
        </form>
        <div style={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
            <Text>No Account?</Text> 
            <Button onClick={()=>setIsLogIn(prev=> !prev)}>Create one!</Button>
        </div>
        
    </>
    );
}
 
export default LoginForm;