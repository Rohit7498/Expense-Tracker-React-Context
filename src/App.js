import './App.css';
import AddExpense from './components/AddExpense';
import History from './components/History';
import Totals from './components/Totals';
import { ExpensesProvider } from './ExpenseContext';

function App() {
  return (
    <div className="App">
      <ExpensesProvider>
        <h1>Expense Tracker</h1>
        <Totals />
        <History />
        <AddExpense />
      </ExpensesProvider>
    </div>
  );
}

export default App;
