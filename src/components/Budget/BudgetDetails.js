import React from 'react';
import './BudgetBody.css'
import{ toDatetimeLocal} from '../../util'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {deleteBudgetAction} from "../../redux/actions/budget"

const BudgetDetails = (props) => {
    let {budget, setBudget, balance, setBalance} = props

     

    const {budgetState} = useSelector((state)=> state.budgetReducer)
    const dispatch = useDispatch()

    

    const deleteEntry = (objectId, amount) => {
        // let newObject = [...budget]
        // setBudget(newObject.filter((data, index)=> index !==objectId))
        // let updateBalance = balance + budgetAmount
        //  setBalance(updateBalance)

        dispatch(deleteBudgetAction({id:objectId, amount}))

    



    }
    return (
        <div className="budget-details-container">
            <h1>Details</h1>
            {budgetState.length > 0
                ?
                <table>
                    <tr className="table-header">
                        <th>Date</th>
                        <th>Budget Name</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th> </th>
                    </tr>
                    {budgetState.map((data,index) =>
                        <tr key={index} className="data-row">
                            <td>{toDatetimeLocal(data.date)}</td>
                            <td>{data.budgetName}</td>
                            <td>{data.budgetAmount}</td>
                            <td>{data.budgetDescription}</td>
                            <td><button style={{backgroundColor:"red", color:"white", padding:"2px 10px", border:"unset"}} onClick={()=>deleteEntry(index,+data.budgetAmount)} >Delete </button> </td>
                        </tr>)}
                </table>
                :
                "Empty"}
        </div>
    );
};

export default BudgetDetails;