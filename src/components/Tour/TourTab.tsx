// This component renders the display section of the provided tours
import { Link } from "react-router-dom";
import "./CardsGuideTour.css";
import Button from "../Button/Button";

const tourContents = [
  {
    name: "تور کیش 2روز 3شب",
    price: "از 1.600.000",
    date: "از 2 آذر 1403 تا 4 آذر 1403",
    company: "شرکت خدمات سفر ایرانیان",
  },
  {
    name: "تور کیش 3روز 4شب",
    price: "از 2.500.000",
    date: "از 2 آذر 1403 تا 5 آذر 1403",
    company: "شرکت خدمات سفر ایرانیان",
  },
  {
    name: "تور قشم 2روز 3شب",
    price: "از 1.700.000",
    date: "از 2 آذر 1403 تا 4 آذر 1403",
    company: "شرکت خدمات سفر ایرانیان",
  },
];

export default function TourTab() {
  return (
    <div className="tour__tabs">
      <div className="tab-content">
        <div className="tab-pane">
          <header className="tab-header">
            <div className="tab-text">تور</div>
            <div className="tab-sort-filter tab-text">
              مرتب شده بر اساس
              <span className="selectTours">
                <select className="tab-sort-input">
                  <option value="newest">جدیدترین‌ها</option>
                  <option value="cheapest">ارزانترین‌ها</option>
                  <option value="viewCount">پر بازدید ترین‌ها</option>
                </select>
              </span>
            </div>
          </header>
          <div className="tabs-content">
            <ul>
              {tourContents.map((tourContent) => {
                return (
                  <li key={tourContent.name}>
                    <Link to={"/"} className="anchor">
                      <span>{tourContent.name}</span>
                      <p>{tourContent.price}</p>
                      <p>{tourContent.date}</p>
                      <p>{tourContent.company}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="more-tour-button">
              <Button buttonStyle="btn--tour" buttonSize="btn--large">
                تورهای بیشتر
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
