import React from 'react';
import Input from '../Input';
import Button from '../Button';
import Title from '../Title';
import Text from '../Text';
import ErrorText from '../ErrorText';

const LoginForm = ({formData, errorStatus, errorMessage, onSubmitForm, setIsLogIn, onChangeForm}) => {

    return ( 
    <>
        <Title> Flappy Bird Sinatra </Title>
        <form className='form' onSubmit={(e)=>onSubmitForm(e, false)}>
            <Input name='username' type='text' placeholder='username' value={formData.username} onChange={onChangeForm}/>
            <Input name='password' type='password' placeholder='password' value={formData.password} onChange={onChangeForm}/>
            {!errorStatus? null : <ErrorText>{errorMessage}</ErrorText>}
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