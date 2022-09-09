import React from 'react';

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">ChaTRoom</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Password"/>
                <input style={{display:"none"}} type="file" id="file"/>
                <label htmlFor="file">
                    <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/addAvatar.png" alt='' />
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register;