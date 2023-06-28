import React, { useState } from "react";
import { Input } from "./Input";
import { Select } from "./Select";

export const ExpenseForm = ({ setExpenses }) => {

  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: ""
  });

  const handleOnChange=(e)=>{
    // const{name, value} = e.target;
    // setExpense((prevState) => ({...prevState, [name]:value }))

    setExpense({...expense, [e.target.name]: e.target.value})
  }

  const [error, setError]=useState({});

 const validationConfig = {
   title: [
     { required: true, message: "Please enter title" },
     { minLength: 5, message: "Title should be at least 5 characters long" },
   ],
   category: [{ required: true, message: "Please select a category" }],
   amount: [{ required: true, message: "Please enter an amount" },
            { pattern: /^[0-9]*$/, message:"Please enter only number"}
  ],
   email: [
     { required: true, message: "Please enter an email" },
     {
       pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
       message: "Please enter a valid email",
     },
   ],
 };

  const validate=(formData)=>{
    const errorsData = {};
    
    Object.entries(formData).forEach(([key, value])=>{
        validationConfig[key].some((rule) => {
          if (rule.required && !value) {
            errorsData[key] = rule.message;
            return true;
          }
          if(rule.minLength && value.length < 5){
            errorsData[key] = rule.message;
            return true;
          }
          if (rule.pattern && !rule.pattern.test(value)) {
            errorsData[key] = rule.message;
            return true;
          }

        })
    })

    setError(errorsData);
    return errorsData;
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
      amount: ""
    });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        id={"title"}
        name={"title"}
        value={expense.title}
        error={error.title}
        onChange={handleOnChange}
        label={"Title"}
      />
      <Select
        id={"category"}
        name={"category"}
        value={expense.category}
        error={error.category}
        onChange={handleOnChange}
        label={"Category"}
        options={['Grocery', 'Clothes', 'Bills', 'Education', 'Medicine']}
      />
      <Input
        id={"amount"}
        name={"amount"}
        value={expense.amount}
        error={error.amount}
        onChange={handleOnChange}
        label={"Amount"}
      />

      <button className="add-btn">Add</button>
    </form>
  );
};