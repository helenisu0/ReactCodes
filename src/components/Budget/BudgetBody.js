import React, {useState} from 'react';
import BudgetEntry from "./BudgetEntry";
import BudgetDetails from "./BudgetDetails";
import "./BudgetBody.css"

const BudgetBody = (props) => {
    const [budget, setBudget] = useState([])
    let {balance, setBalance, customerName} = props;

    const Greeting = () => {
        let myDate = new Date().getHours()
        let greet;

        if (myDate < 12)
            greet = "morning"
        else if (myDate > 12 && myDate < 17 )
            greet = "afternoon"
        else
            greet = "evening"

        return <span>Good {greet},</span>

    }
return (
        <div className="budget-body">
            <div className="text-intro">
            <h1>{Greeting()}Welcome to your personal budget, {customerName}</h1>
            <p>Enter the price, description and give a special name to your expenditure</p>
            </div>
            <div className='budget-body-sectioned'>
        <BudgetEntry budget={budget} setBudget={setBudget} balance={balance} setBalance={setBalance}/>
        <BudgetDetails  budget={budget} setBudget={setBudget} balance={balance} setBalance={setBalance}/>
        </div>
    </div>
    );
};

export default BudgetBody;