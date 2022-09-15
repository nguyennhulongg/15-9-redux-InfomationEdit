import '../Edit/EditPage.css'

const Input = (props) => {
  const {inputType, className, label, data, setData} = props;
  return ( 
    <>
      <label>{label}</label>
      {inputType === "textarea" ? (
        <textarea type="text" className={className} placeholder={data} onChange={(e) => {setData(e.target.value)}}/>
      ) : (
        <input type="text" placeholder={data} onChange={(e) => {setData(e.target.value)}}/>
      )}
    </>
  );
}

export default Input;