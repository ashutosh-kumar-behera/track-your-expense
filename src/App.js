import { useState } from 'react';
import './App.css'
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseTable } from './components/ExpenseTable';
import ExpenseData from './ExpenseData';
function App(){

  const[expenses, setExpenses]=useState(ExpenseData)
  const [expense, setExpense] = useState({
     title: "",
     category: "",
     amount: "",
   });
 const [editingRowId, setEditingRowId] = useState("");

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
        <ExpenseTable
          expenses={expenses}
          setExpenses={setExpenses}
          setExpense={setExpense}
          setEditingRowId={setEditingRowId}
        />
      </div>
    </main>
  );
}

export default App;