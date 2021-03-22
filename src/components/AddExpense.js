import React, {useContext, useState} from 'react'
import { ExpenseContext } from '../ExpenseContext'

export default function AddExpense() {
    const [expense, setExpense] = useContext(ExpenseContext)

    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')
     
    const registerText = (e) => {
        setText(()=>e.target.value)
    }

    
    const registerAmount = (e) => {
        setAmount(()=>e.target.value)
    }
    
    const addExpense = (e)=>{
        e.preventDefault()
        setExpense(prevExpenses => [...prevExpenses, {text: text, amount: Number(amount)}])
        setText('')
        setAmount('')
    }

    return (
        <div id="addExpense" onSubmit={addExpense}>
            <form>
                <h2>Add New Transaction</h2>
                <input type="text" name="text" className="form-element" placeholder="Text" value={text} onChange={registerText} />
                <input type="text" name="amount" className="form-element" placeholder="Amount"  value={amount} onChange={registerAmount} />
                <button className="form-element" type="submit">Add Transaction</button>    
            </form>
            
        </div>
    )
}
