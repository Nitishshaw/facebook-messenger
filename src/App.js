import './App.css';
import React, { useEffect, useState } from 'react';
import { FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';




function App() {
  const[input, setInput] = useState('');
  const[messages, setMessages] = useState([]);
  const[username, setUsername] = useState('');
  useEffect(() =>{
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc =>({id :doc.id, message:doc.data()})))
    })
  }, [])

  useEffect(() =>{
     setUsername(prompt('Please enter your name ')) 
  },[]  )
 
  const sendmessage =event =>{
    event.preventDefault();
    db.collection('messages').add({
      username :username,
      message :input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  
  return (
    <div className="App">
      <img alt=""src ="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"/>
     <h1> Nitish</h1>
     <h2>Welcome {username}</h2>
     <form className="app_form">
     <FormControl className="app__formcontrol">
  <InputLabel >Enter a message</InputLabel>
  <Input className="app__input" value={input} onChange={event =>setInput(event.target.value)}/>
  <FormHelperText ></FormHelperText>
      <IconButton className="app__iconbutton" disabled={!input} variant="contained" color="primary" type ='submit' onClick={sendmessage} >
       <SendIcon/>
      </IconButton>
     </FormControl>
     </form>
     <FlipMove>
     {
       messages.map(({id, message}) =>(
         <Message key={id} username={username} message ={message}/>
      
       ))
     }
     </FlipMove>
    
    
    </div>    
  );
}

export default App;
