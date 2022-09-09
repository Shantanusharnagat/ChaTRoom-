import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">ChaTRoom</span>
      <div className="user">
        <img src="https://haikyuu-merch.net/wp-content/uploads/2021/06/shoyo-hinata.jpg" alt="" />
        <span>Hinata</span>
        <button>LogOut</button>
      </div>
    </div>
  )
}

export default Navbar