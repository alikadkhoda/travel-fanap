// this component renders a single form input field with customizable label, type, name, and placeholder.
import "./SignUpForm.css";
type InputForm ={
    label:string;
    id:string;
    type:string;
    name:string;
    placeholder:string
}
export default function Input({label,id,type,name,placeholder}:InputForm) {
  return (
    <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              name={name}
              id={id}
              className="text-input"
              placeholder={placeholder}
              autoComplete="off"
            />
          </div>
  )
}
