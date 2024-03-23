// this component renders a single form input field with customizable label, type, name, and placeholder.
import "./SignUpForm.css";
type InputForm ={
    label:string;
    type:string;
    name:string;
    placeholder:string
}
export default function Input({label,type,name,placeholder}:InputForm) {
  return (
    <div className="form-group">
            <label htmlFor="password">{label}</label>
            <input
              type={type}
              name={name}
              className="text-input"
              placeholder={placeholder}
              autoComplete="off"
            />
          </div>
  )
}
