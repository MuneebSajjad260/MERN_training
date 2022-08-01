

import './App.css';
 import io from 'socket.io-client'
import { useState } from 'react';
import Chat from './chat';
 const socket=io.connect("http://localhost:5000")
function App() {
const[username,setusername]=useState("")
const[room,setroom]=useState("")
const[showChat,setShowChat]=useState(false)

const joinroom=()=>{
  if(username!=="" && room !=="")
  {
    socket.emit("join room",room)
    setShowChat(true);
  }
}
  return (
    <div className="App">
      {!showChat ?(
      <div className='joinChatContainer'>
    <h1>Join chat</h1>
    <input typeof='text' placeholder='john...' onChange={(event)=>{setusername(event.target.value)}}></input>
    <input typeof='text' placeholder='room id...'  onChange={(event)=>{setroom(event.target.value)}} ></input>
    <button onClick={joinroom}>Join a room</button>
    </div>
      )
    :(
    <Chat socket={socket} username={username} room={room}/>
    )}
    </div>
  );
}

export default App;
