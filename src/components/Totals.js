import React, { useContext } from 'react'
import { ExpenseContext } from '../ExpenseContext'

export default function Totals() {
    const [expense, setExpense] = useContext(ExpenseContext)

    return (
        <div>
           <div id="totalExpense">            
               <h2>Your Expense: {expense.reduce((accumulator, curVal)=> accumulator + curVal.amount , 0)}</h2>
           </div>
           <div id="individualExpense">            
            
            <span> <b>Income: {expense.filter(exp=> exp.amount > 0).reduce((accumulator, curVal)=> accumulator + curVal.amount, 0)}</b> </span> &nbsp;&nbsp; 
            
            <span> <b>Expense: {expense.filter(exp=> exp.amount < 0).reduce((accumulator, curVal)=> Math.abs(accumulator + curVal.amount), 0)}</b> </span>
           </div>

        </div>
    )
}
