import React from 'react'
import Siderbar from '../components/Siderbar';
import Chat from '../components/Chat'

export const Home = () => {
  return (
    <div className='home'>
        <div className="container">
        <Siderbar/>
        <Chat/>
        </div>
    </div>
  )
}

export default Home;