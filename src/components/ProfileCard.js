
import image from "../assests/logo.svg"
import React, {useState} from 'react'

import './ProfileCard.css'

const ProfileCard = (props) => {
    let{username, hobby} = props
    const handleclick = () =>{
       let newObject = {username:`Mr ${username}`, hobby:`My ${hobby}`}
       setState({...state, ...newObject})
    }

    const [state, setState] = useState({username:username, hobby:hobby})
    
  return (
    <div className ="profile-card">
        <img src={image} alt="" className="profile-card-avatar"/>
        <div className="details-container">
            <div className="firstname-details">
                <p>Name</p>
                <h1>{state.username}</h1>

            </div>
            <div className="hobby-details">
                <p>Hobby</p>
                <h1>{state.hobby}</h1>

            </div>
        </div>
        <button onClick={handleclick}>Click Me</button>
    </div>
  )
}

export default ProfileCard



