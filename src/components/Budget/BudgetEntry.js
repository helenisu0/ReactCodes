import React, {useState} from 'react';
import{addItemToBudget} from "../../redux/actions/budget"
import {useDispatch} from 'react-redux'

const BudgetEntry = (props) => {
    let {budget, setBudget, balance, setBalance} = props

    const dispatch = useDispatch()

    const [input, setInput] = useState({budgetName: '', budgetAmount: '', budgetDescription:'', date:''})

    const handleInput = (e) => {
        setInput({...input, [e.target.name] : e.target.value})
    }

    const createBudget = () => {
        let budgetData = [{...input, date: Date.now()}, ...budget]
        let budgetStoreData = {...input, date: Date.now()}
        let newBudget ={...input}
        setBudget(budgetData)
        dispatch(addItemToBudget(budgetStoreData))
        setBalance(balance)


        let newBalance = balance - newBudget.budgetAmount
        setBalance(newBalance)
    }

    return (
        <div className="budget-entry-container">
        <div className="budgetEntry">
            <p>Budget Name</p>
            <input name="budgetName" onChange={handleInput} />
        </div>
            <div className="budgetEntry">
                <p>Budget Amount</p>
                <input name="budgetAmount" onChange={handleInput} />
            </div>
            <div className="budgetEntry">
                <p>Budget description</p>
                <input name="budgetDescription" onChange={handleInput} />
            </div>
            <button onClick={createBudget}>Enter</button>
        </div>
    );
};

export default BudgetEntry;