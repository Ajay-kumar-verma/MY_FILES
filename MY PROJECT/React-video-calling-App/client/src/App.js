import React from 'react'
import {Typography,AppBar} from '@material-ui/core';
import VideoPlayer from './components/VideoPlayer';
import Option from './components/Option';
import  Notification from './components/Notification'

const App = () => {
    return (
        <>
  <AppBar position="static" color="inherit" >
     <Typography variant="h3" align="center">
   video chat 
</Typography>
  </AppBar>
          
  <VideoPlayer />
  <Option  />
   <Notification />
   
        </>
    )
}



export default App
