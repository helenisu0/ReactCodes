import React, {useState} from 'react'
import "./Budget.css"
import BudgetBalance from "./components/Budget/BudgetBalance"
import BudgetBody from './components/Budget/BudgetBody'


const Budget = (props) => {
    const [balance, setBalance] = useState(500000)
    
  return (
    <div className="budget-container">
        <BudgetBalance balance ={balance} setBalance={setBalance}/>
        <BudgetBody customerName={props.customerName} balance={balance} setBalance={setBalance} />
    </div>
  )
}

export default Budget