import React,{useState} from 'react'
import Login from "./components/authentication/Login"
import Register from "./components/authentication/Register"
import "./authentication.css"

const Authentication = (props) => {
    const [auth, setAuth] = useState("login")
    const [alert, setAlert] = useState({iShow: false, status:"", message:""})
    const switchHandler = ()=>{
    if(auth === "login"){
        setAuth("register")
    }else{
        setAuth("login")
    }
}
  return (
    <div className="auth-container">
        <div className="auth-body">
            <div style={{display: "flex", justifyContent:"space-between"}}>
                {alert.iShow && <div className="alert" 
                    style={alert.status==="error" ? 
                    {backgroundColor:"red"}: 
                        {backgroundColor:"teal"}}>
                            {alert.message}
                </div>}
                <button onClick={switchHandler}>{auth ==="login"? "Register": "Login"}</button>
            </div>
        
         {auth ==="login" ? <Login setCustomerName={props.setCustomerName} setAlert={setAlert}/> : <Register setAlert={setAlert}/>}
      
         </div>
    </div>
  )
}

export default Authentication