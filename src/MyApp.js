import React from 'react'
//import MyButton from './components/MyButton'
import ProfileCard from './components/ProfileCard'
import "./MyApp.css"

const MyApp = () => {
  return (
<>

    <div className="myapp-container">
        <ProfileCard username="Ujay" hobby="sleeping"/>
        <ProfileCard username="Helen" hobby="Drumming"/>
    </div>
    {/* <MyButton buttonName="tolu" color="white" background="green"/>
    <MyButton buttonName='Helen' color="yellow" background="red"/>
    <MyButton buttonName='David' color="white" background="red"/> */}
    
</>
  )
}

export default MyApp