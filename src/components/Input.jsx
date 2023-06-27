export const Input = ({id,name,value,error,onChange,label})=>{
    return (
      <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <input id={id} name={name} value={value} onChange={onChange} />
        <p className="error">{error}</p>
      </div>
    );
}