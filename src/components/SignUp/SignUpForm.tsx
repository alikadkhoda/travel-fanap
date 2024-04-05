//  this component renders a sign-up form with fields for name, phone number, email, and password.

import Input from "./Input";
import "./SignUpForm.css";

export default function SignUpForm() {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="signup-container">
        <div className="signup-form">
          <Input
            label="نام و نام خانوادگی:"
            id='name'
            type="text"
            name="name"
            placeholder="نام و نام خانوادگی"
          />
          <Input
            label="شماره همراه:"
            id='phone'
            type="text"
            name="number"
            placeholder="شماره تلفن همراه"
          />
          <Input label="ایمیل:" id='email' type="email" name="email" placeholder="ایمیل" />
          <Input
            label="رمز عبور:"
            id="password"
            type="password"
            name="password"
            placeholder="رمز عبور"
          />
          <input type="submit" className="btn btn--tour btn--medium" value={'ثبت نام'}/>
        </div>
      </div>
    </form>
  );
}
