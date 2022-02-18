import React, {useRef} from 'react'
import {useHistory} from 'react-router-dom'
import './Login.css'
function Login() {
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)


    const login = (e) =>{
        e.preventDefault();
        // console.log(formRef.current.target)
        const username = usernameRef.current.value
        const password = passwordRef.current.value
        
        if(username === "dickson123" && password === '575757'){
            history.push('/members')

        }
        else{
            alert("Incorrect Credentials")
        }
    }

    const history = useHistory();
  return (
    <div className="login__form">
    <form onSubmit={login}>
        <img src="/maki_hospital-jp.svg" alt="" />
        <label htmlFor="">Username</label>
        <input type="text" ref={usernameRef} name="username" id="df" placeholder='username'/>
        <label htmlFor="">Password</label>
        <input type="password" ref={passwordRef} name='password' id="33" placeholder='password'/>
        <button type="submit">Login</button>
    </form>
    </div>
  )
}

export default Login