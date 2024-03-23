//  this component renders a sign-up form with fields for name, phone number, email, and password.
import Button from "../Button/Button";
import Input from "./Input";
import "./SignUpForm.css";

export default function SignUpForm() {
  return (
    <form action="">
      <div className="signup-container">
        <div className="signup-form">
          <Input
            label="نام و نام خانوادگی:"
            type="text"
            name="name"
            placeholder="نام و نام خانوادگی"
          />
          <Input
            label="شماره همراه:"
            type="text"
            name="number"
            placeholder="شماره تلفن همراه"
          />
          <Input label="ایمیل:" type="email" name="email" placeholder="ایمیل" />
          <Input
            label="رمز عبور:"
            type="password"
            name="password"
            placeholder="رمز عبور"
          />
          <Button buttonStyle="btn--tour" buttonSize="btn--medium">
            ثبت نام
          </Button>
        </div>
      </div>
    </form>
  );
}
