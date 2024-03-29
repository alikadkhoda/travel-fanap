// this component renders Tour page

import Button from "../components/Button/Button";
import CardsGuideTour from "../components/Tour/CardsGuideTour";
import imageTour from "../assets/images/home.jpg";
import { useState } from "react";

export default function Tour() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <div className="tourism">
        <div
          className="tourism"
          style={{ backgroundImage: `url(${imageTour})` }}
        >
          <p>پرتال جامع گردش و سفر</p>
          <div className="tourism-box">
            <input
              type="text"
              name="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="search-input"
              placeholder="نام شهر یا کشور"
              autoComplete={"false"}
            />
            <Button buttonStyle="btn--search--place" buttonSize="btn--medium">
              جستجو
            </Button>
          </div>
        </div>
      </div>
      <CardsGuideTour />
    </>
  );
}
