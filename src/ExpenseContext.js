
import React, {useState, createContext} from 'react'

export const ExpenseContext = createContext({})

export const ExpensesProvider = (props)=>{

    const [expense, setExpense] = useState([
        {
            text: "Gym Membership",
            amount: -1000,
        },
        {
            text: "Rent",
            amount: -10500
        },
        {
            text: "Cash",
            amount: 20000 
        }
    ])

    return (
        <ExpenseContext.Provider value={[expense, setExpense]}>
            {props.children}
        </ExpenseContext.Provider>
    )

}

