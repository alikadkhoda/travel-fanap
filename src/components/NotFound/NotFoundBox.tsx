import { Link } from "react-router-dom";
import "./NotFoundBox.css";
export default function NotFoundBox() {
  return (
    <div className="box">
      <div>
        <h1>404</h1>
        <div className="text">صفحه مورد نظر پیدا نشد</div>
      </div>
      <Link className="link" to={'/'}>بازگشت به صفحه اصلی</Link>
    </div>
  );
}
