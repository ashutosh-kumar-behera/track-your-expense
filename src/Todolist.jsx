import { useRef, useState } from "react"

export const Todolist = () =>{
    const[list, setList]=useState([]);
    const inputRef = useRef();

    const onSubmitHandler =(e)=>{
        e.preventDefault();
        setList([...list, inputRef.current.value]);
        inputRef.current.value='';
        inputRef.current.focus();
        //setList([...list, list.splice(index, 1, inputRef.current.value)]);
    }
    
    const deleteItem =(value)=>{
        const newList = list.filter((element)=> element !== value)
        setList(newList);
    }

    const editElement = (value,index) =>{
        inputRef.current.value = value;
        inputRef.current.focus();
    }


    return(
        <>
            <form onSubmit={onSubmitHandler}>
                <input type="text" ref={inputRef}/>
                <button>Add</button>
            </form>
            <ol>
                {
                    list.map((value, index)=>{
                        return(
                        <li key={index}>
                            {value}
                            <button onClick={()=>deleteItem(value)}>Delete</button>
                            <button onClick={()=>editElement(value, index)}>Edit</button>
                        </li>
                    )})
                }
            </ol>
        </>
    )
}