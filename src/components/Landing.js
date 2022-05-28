import React, {useState} from 'react';
import Container from './landing_components/Container';
import SubContainer from './landing_components/SubContainer';


import RegisterForm from './landing_components/Forms/RegisterForm';
import LoginForm from './landing_components/Forms/LogInForm';



const Landing = () => {
    const [isLogIn, setIsLogIn] = useState(true)
    return ( 
        <Container>
            <SubContainer>

                {isLogIn? <LoginForm setIsLogIn={setIsLogIn}/> : <RegisterForm setIsLogIn={setIsLogIn}/>}

            </SubContainer>
        </Container>
     );
}
 
export default Landing;