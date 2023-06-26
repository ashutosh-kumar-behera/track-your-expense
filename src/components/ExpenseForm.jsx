import React, { useRef, useState } from "react";

export const ExpenseForm = ({ setExpenses }) => {

  const titleRef = useRef();
  const categoryRef = useRef();
  const amountRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses((prevState) => [
      ...prevState,
      {
        title: titleRef.current.value,
        category: categoryRef.current.value,
        amount: amountRef.current.value,
        id: crypto.randomUUID(),
      },
    ]);
    e.target.reset();  
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          ref={titleRef}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          ref={categoryRef}
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
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          ref={amountRef}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};
