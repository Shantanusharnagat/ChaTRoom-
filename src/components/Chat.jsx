import React from 'react'
import { useContext } from 'react';
import Messages from "../components/Messages"
import { ChatContext } from '../context/ChatContext';
import Input from './Input';


const Chat = () => {
  const {data}=useContext(ChatContext)
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
        <div className='chatIcons'>
          <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/cam.png" alt="" />
          <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/add.png" alt="" />
          <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/more.png" alt="" />
        </div>
        

      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat;