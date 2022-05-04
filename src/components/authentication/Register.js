import React,{useState} from 'react'

const Register = ({setAlert}) => {
const[userDetails, setUserDetails] = useState({username:"", email:"", password:""})
const handleUserInput = (e) => {
    setUserDetails({...userDetails, [e.target.name]: e.target.value })
}

const handleRegistration = () => {
    let{username, email, } = userDetails

   let isFieldsIncomplete= Object.keys(userDetails).some((detail)=>detail ===" " )
    if(isFieldsIncomplete){
        setAlert({iShow: true, status:"error", message:"field incomplete"})
        return
    }

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let isEmailCorrect = email.match(validRegex)
    if(!isEmailCorrect) {
        setAlert({iShow: true, status:"error", message:"Email incorrect"})
        return
    }

    
    
       
    


try{
let userRepository
userRepository = JSON.parse(localStorage.getItem("users"))
let isUserExist = userRepository.some((user) => user.username === username)
if(isUserExist) {
    setAlert({iShow: true, status:"error", message:"Username already exists"})
    return
}
let newUserRepository = [userDetails, ...userRepository]
localStorage.setItem("users", JSON.stringify(newUserRepository))
setAlert({iShow: true, status:"success", message:"Registration successful"})
}catch(error){
    localStorage.setItem("users", JSON.stringify([userDetails]))
    setAlert({iShow: true, status:"success", message:"Registration successful"})
    
}


}

  return (
    <div className="auth-register">
        <label>Username</label>
        <input name= "username" onChange={handleUserInput}/>
        <label>Email</label>
        <input name= "email"onChange={handleUserInput}/>
        <label>Password</label>
        <input name= "password" onChange={handleUserInput}/>
        <button onClick={handleRegistration}>Register</button>

        
    
    </div>
  )
}

export default Register