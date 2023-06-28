import { useState } from 'react';
import './App.css'
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseTable } from './components/ExpenseTable';
import ExpenseData from './ExpenseData';
function App(){
  const[expense, setExpenses]=useState(ExpenseData)
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenses={setExpenses} />
        <ExpenseTable expense={expense} setExpenses={setExpenses} />
      </div>
    </main>
  );
}

export default App;