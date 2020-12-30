import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Message.css'

const Message =forwardRef(({username, message}, ref) =>{
  const isuser =username===message.username;
    
    return (
        <div ref={ref} className= {`message ${isuser && 'message__user'}`}>
        <Card className={isuser ? "message__usercard" :"message__guestcard"} >
          <CardContent>          
        <Typography color="white" variant="h5" component="h2" >
        {!isuser && `${message.username ||"Unkown User"}:`} {message.message}
        </Typography>
        </CardContent>
         </Card>
         </div>
    )
})

export default Message
