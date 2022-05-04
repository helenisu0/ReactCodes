import React from 'react'
import './Celo.css'
import Links from './components/links/Links'
// import Logo from './components/Logo'
import HeaderLogo from "./assests/celo-logo.png"
import Middle from './components/links/Middle'
import Article from './components/links/Article'
import climate from './assests/climate.jpg'



const Celo = () => {

  return (
     <div className="celo-container">
         <div className="celo-header">
               <img src={HeaderLogo} alt="" height="30px" width="120px"/>
                <Links/>
         </div>
        
          <div>
                <div className="middle-container">
                    <b>We see a world where </b> 
                      <h4>creators and founders<br/>
                           shape local economy
                      </h4>
                     

                    <b>We want Growth</b>
                    <h4> of Local Economies
                        to generate Global ecologies
                    </h4>

                    <b>We build products</b>
                    <h4> that create products 
                        that create condition for prosperity-for everyone
                    </h4>
                  </div>
                  <div className="middle-div">
                        <div>
                             <Middle/>
                        </div>
                        
                          <Article name="Taking action against climate change with"
                          imageUrl={climate}/>
                        
                  </div>

           </div>

        
    </div>
  )
}

export default Celo