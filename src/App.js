import Logo from "./components/Logo";
import "./MyApp.css"
// import AuthButton from './components/AuthButton';
import Budget from "./Budget"
 import Authentication from "./Authentication"
import Celo from './Celo'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React, {useState} from 'react'
import {Provider} from "react-redux"
import store from "./redux/store"




function App() {

      const [signIn, setSignIn] = useState(false)
      const [customerName, setCustomerName] =  useState("")



      return(
      <Provider store={store}>
      <div className="app-container">
      {/* <Budget/> */}
      {/* <Celo/> */}
            <Router>
                  <Switch>
                        <Route exact path="/">
                              <Authentication setCustomerName={setCustomerName} />  
                        </Route>

                        <Route path="/dashboard">
                              <Budget customerName={customerName}/>
                        </Route>
                  </Switch>
            </Router>
      </div>
</Provider>

)













// const links = [

//   {
//     reviewName: 'Reviews',
//   },
//   {
//     tipName: 'Tips',
//   },
//   {
//     alertsName: 'Alerts',
//   },
//   {
//     blogsName: 'Blogs',
//   }


// ]


//   return (
//     <div className="app-container">
//       <div className="header-container"> 
//           <div className="header">
//             <Logo/>

//             <div style={{display: 'flex', justifyContent: 'space-between', width: '20%', alignItems: 'center', marginLeft: '25em', color: 'white'}}>
            
//               {links.map((link) => <a href="#"><p>{link.reviewName}</p></a>)}
//               {links.map((link) => <a href="#"><p>{link.tipName}</p></a>)}
//               {links.map((link) => <a href="#"><p>{link.alertsName}</p></a>)}
//               {links.map((link) => <a href="#"><p>{link.blogsName}</p></a>)}
              
              
//             </div>
//             <div className="signInbutton">
//                 <AuthButton/>
//             </div>
//           </div>
//         <div>
//           <div className="discoverBody">
//             <h1>Discover A Beautiful<br></br> Place With Us</h1>
//             <p>would you explore nature paradise in the world<br></br>lets find the best laocation</p>
//           </div>
//         </div>


//       </div>
    
//     </div>
//   );
}

export default App;
