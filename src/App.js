import './App.css';
import styled from 'styled-components';
import { FaRegThumbsUp,FaRegThumbsDown,FaRegBell,FaShare,FaHandScissors,FaDownload } from "react-icons/fa";
import Player from './components/Player';
import { useState } from 'react';


function App() {
const [x,setX]=useState(0)
const [Y,setY]=useState(0)
const [subscribe,setSubscribe]=useState('subscribe')
  
  const Text =styled.h2`
  font-size:15px; 
  color: white;
  
  `;
  const Like =styled.button`
 font-size:10px;
 border-radius:10px; 
 margin-left:45px;
 cursor:pointer;
   `;

  return (
    <div >
      <Player/>
      <Text>
        Chilled Serenity #5
        </Text>
        <Like onClick={() => setSubscribe('subscribed')}> {subscribe}   </Like>
        <Like><FaRegBell/></Like>
        <Like onClick={()=>setX(x+1)}><FaRegThumbsUp />{x}</Like>
        <Like onClick={()=>setY(Y+1)}><FaRegThumbsDown/>{Y}</Like>
        <Like><FaShare/>share</Like>
        <Like><FaHandScissors/>clip</Like>
        <Like><FaDownload/>Download</Like>
     
    </div>
  );
}

export default App;
