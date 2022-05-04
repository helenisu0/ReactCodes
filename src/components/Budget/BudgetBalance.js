// import React, {useEffect, useState} from 'react'
// import "./BudgetBalance.css"
// import {useSelector} from "react-redux"
// import axios from "axios"



// const BudgetBalance = (props) => {
//     const[input, setInput] = useState(false)
//     const handleInput = (e) =>{
//         setInput(e.target.value)
        
//     }
//     const{budgetAmount} = useSelector(state => state.budgetReducer)

//     useEffect(()=>{
//       fetch("https://v6.exchangerate-api.com/v6/a422a186bdc3c5f569e373ac/latest/USD").then(
//         (data)=>data.json()
//       ).then((data => console.log(data))
//       )
//     }, [])

//     useEffect( ()=>{
//       console.log("i just mounted @ Budget Balance")
//       return()=>{
//         console.log("i just unmounted @ Budget Balance")
//       }
//     }, [props.balance])

//   return (
//     <div className="budgetBalance">

//     <div className="balance"> 
//         {budgetAmount}
//     </div>
//     <select className="balance-dropdown" onChange={handleSelect}>
//                 {Object.keys(exchangeRate).length > 0 &&
//                 Object.keys(exchangeRate).map(
//                     (data, index) => <option key={index}>{data}</option>
//                 )}
//             </select>
//     <div className="balance-button">
//     <input onChange={handleInput}/>
//     <button onClick = {() => props.setBalance(input)}>Update Balance</button>



//     </div>
//     </div>
//   )
// }

// export default BudgetBalance