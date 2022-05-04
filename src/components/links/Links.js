import React from  'react'
import './Link.css'

const Links  = () => {
    const links = [
        {
             aboutName: 'About',
        },
        {
          developersName: 'Developers',
        },
        {
          communityName: 'Community',
        },
        {
          ecosystemName: 'Ecosystem',
        },
    
        {
           allianceName: 'Alliance',
        },
        {
          governmentName: 'Government',
        }
        ]
    return (
      <>
      
          <div className="celo-navbar">
                {links.map((link) => <a href="#"><p>{link.aboutName}</p></a>)}
                {links.map((link) => <a href="#"><p>{link.developersName}</p></a>)}
                {links.map((link) => <a href="#"><p>{link.communityName}</p></a>)}
                {links.map((link) => <a href="#"><p>{link.ecosystemName}</p></a>)}
                {links.map((link) => <a href="#"><p>{link.allianceName}</p></a>)}
                {links.map((link) => <a href="#"><p>{link.governmentName}</p></a>)}
               
          </div>
         
        </>
    )
}
export default Links