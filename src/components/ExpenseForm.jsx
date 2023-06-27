import React, { useState } from "react";

export const ExpenseForm = ({ setExpenses }) => {

  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const handleOnChange=(e)=>{
    // const{name, value} = e.target;
    // setExpense((prevState) => ({...prevState, [name]:value }))

    setExpense({...expense, [e.target.name]: e.target.value})
  }

  const [error, setError]=useState({});

  const validate=(formData)=>{
    const errorData={};

    if(!formData.title){
      errorData.title="Title is require"
    }

    if(!formData.category){
      errorData.category = "Category is require"
    }

    if(!formData.amount){
      errorData.amount = "Amount is require"
    }

    setError(errorData);

    return errorData;
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(expense)
    if(Object.keys(validateResult).length) return;

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expense.title}
          onChange={handleOnChange}
        />
        <p className="error">{error.title}</p>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={handleOnChange}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
        <p className="error">{error.category}</p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleOnChange}
        />
        <p className="error">{error.amount}</p>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};
