import React, { useContext } from 'react'
import { ExpenseContext } from '../ExpenseContext'

export default function History() {
    const [expense, setExpense] = useContext(ExpenseContext);

    return (
        <div>
            <h2>History</h2>
            {expense.map(e => <p key={e.text}> {e.text}: {e.amount} </p>)}
        </div>
    )
}
