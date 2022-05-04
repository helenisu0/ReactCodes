import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

const Login = (props) => {

  let history = useHistory()
  const[userDetails, setUserDetails] = useState({identity:"", password:""})

  const handleUserInput = (e)=> {
      setUserDetails({...userDetails, [e.target.name]: e.target.value})
  }

  const handleLogin = () =>{
    let userRepository = JSON.parse(localStorage.getItem("users"))
    
    let user = {}
    let isValid = userRepository.some((userObject)=>{
      let idCheck=(userObject?.email === userDetails.identity || 
      userObject?.username === userDetails?.identity)
      let passwordCheck = (userObject.password === userDetails.password)
        if(idCheck && passwordCheck){
          user = userObject
        }
      return idCheck && passwordCheck
    })

    isValid ?
      history.push("/dashboard"):
      props.setAlert({iShow: true, status:"success", message:"login successful"})
      props.setAlert({iShow: true, status:"error", message:"User Details incorrect"})
    setTimeout(
      ()=> props.setAlert({iShow: false, status:"", message:""}), 5000
    )

   props.setCustomerName( user.username)
   
    
  }
  
  return (
        <div className="auth-register">
          <label> Email or Username</label>
          <input name="identity" onChange={handleUserInput}/>
          <label>Password</label>
          <input type="password" name="password" onChange={handleUserInput}/>
          <button onClick={handleLogin}>Login</button>
        </div>
      )
}

export default Login