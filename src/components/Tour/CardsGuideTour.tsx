// This component renders all types of tours
import { Link } from "react-router-dom";
import "./CardsGuideTour.css";
import TourTab from "./TourTab";

const tours = [
  "تمام تورها",
  "تورهای خارجی",
  "تورهای داخلی",
  "تور یک روزه",
  "تور چند روزه",
  "تور طبیعت گردی",
  "تور ماجراجویانه",
  "تور زیارتی",
  "تورهای ویژه",
  "تور کویرگردی",
  "تور دریایی",
  "تور فرهنگی",
];

export default function CardsGuideTour() {
  return (
    <>
      <div className="container">
        <div className="tour__tabs">
          <div className="tour__wrapper">
            <ul className="nav-tabs">
              {tours.map((tour) => {
                return (
                  <li key={tour}>
                    <Link to="" className="anchor">
                      <h5>{tour}</h5>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <TourTab/>
    </>
  );
}
