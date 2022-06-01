import React, {useState, useEffect} from 'react';
import Container from './main_components/Container';
import Section from './main_components/Section';
import StyledTable from './main_components/StyledTable';
import previous from '../img/left-arrow.png'
import Content from './main_components/Content';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { getBestScores } from '../fetchs/fetchs';


const LeaderBoard = () => {
    
    const [data , setData] = useState([{Top: '',
                                        Score: '',
                                        User: '',
                                        Date: ''}])
    
    const {id, username} = useSelector(state => state.user.value)
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchData = async () => {
            let response = await getBestScores()
            
            if(response !== false){
                response.forEach((info, index)=>{
                    info['Top'] = info['id'];
                    info['Top'] = index + 1;
                    delete info['id'];
                    info['Score'] = info['score'];
                    delete info['score'];
                    info['User'] = info['username'];
                    delete info['username'];
                    info['Date'] = info['created_at'];
                    info['Date'] = info['created_at'].substring(0,10)
                    delete info['created_at'];
                })
                
                setData(()=> response)
            }
        }

        fetchData()
        
    },[id])
    const onReturn = () => {
        navigate(-1)
    }

    if(username === ''){
        return <Navigate replace to='/'/>
      }else{
        return ( 
            <Container>
                <Section>
                    <Content>
                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '50px'}}>
                            <img src={previous} alt='back button' width='40px' height='40px' onClick={onReturn}/>
                            <h1 style={{alignSelf: 'center',fontFamily: 'PixelarRegularW01-Regular', fontSize: '52px', marginLeft:'90px', color:'white'}}>Leader Board</h1>
                        </div>
                        <div className='leader-board'>
                         <StyledTable data={data} numOfCol={4}/>
                        </div>
                    </Content>
                </Section>
            </Container>
        );
    }
}
 
export default LeaderBoard;