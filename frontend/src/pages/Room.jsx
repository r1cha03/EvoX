// import {useContext,useEffect} from 'react'
// import { useParams } from 'react-router-dom';
// import { RoomContext } from '../context/RoomContext';
// import { VideoPlayer } from '../components/VideoPlayer';
// export const Room = () => {
//     const { id } = useParams();
//     const {ws,me,stream,peers}=useContext(RoomContext);
//       useEffect(() => {
//           if(me)
//           ws.emit('join-room', {roomId: id,peerId:me._id});
//       }, [id,me,ws]);
//     return (
//       <div>Room id: {id}
//       <div className='grid grid-cols-4 gap-4'>
//         <VideoPlayer stream={stream} key={me?._id}/>
//         {Object.values(peers).map((peer) => (
//           <VideoPlayer stream={peer} key={peer.peerId}/>
//         ))}
//       </div>
//       </div>
      
//     )
// }

import React from 'react';
// import { Typography, AppBar } from '@mui/material';
// import { makeStyles } from '@mui/styles';

import VideoPlayer from '../components/VideoPlayer';
import Sidebar from '../components/Sidebar';
import Notifications from '../components/Notifications';


const Room = () => {
  //const classes = useStyles();

  return (
    <div>
    {/* <div className={classes.wrapper}> */}
      {/* <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">Video Chat</Typography>
      </AppBar> */}
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};

export default Room;