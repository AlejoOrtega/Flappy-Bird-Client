import React from 'react';
import Input from '../Input';
import Button from '../Button';
import Title from '../Title';

import {useNavigate} from 'react-router-dom'

const RegisterForm = ({setIsLogIn}) => {

    const {username, password, repeatPassword} = ''
    const navigate = useNavigate()

    const onChangeForm = () => {

    }

    const onSubmitForm = () => {
        navigate('game')
    }

    return ( 
    <>
        <Title> Register </Title>
        <form className='form' onSubmit={onSubmitForm}>
            <Input name='username' type='text' placeholder='username' value={username} onChange={onChangeForm}/>
            <Input name='password' type='password' placeholder='password' value={password} onChange={onChangeForm}/>
            <Input name='repeatPassword' type='password' placeholder='repeat password' value={repeatPassword} onChange={onChangeForm}/>
            <Button>Submit</Button>
        </form>
        <Button onClick={()=>setIsLogIn(prev=> !prev)}>Back</Button>
    </>
    );
}
 
export default RegisterForm;