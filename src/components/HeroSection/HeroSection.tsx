import Button from "../Button/Button";
import "./HeroSection.css";
import Video from "../../assets/videos/1.mp4";
import { useState } from "react";

export default function HeroSection() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="hero-container">
      <video src={Video} autoPlay loop muted />
      <div className="hero-buttons">
        <input
          className="search-input"
          name="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="جستجوی مکان،شهر،کشور و ..."
        />
        <Button buttonStyle="btn--search" buttonSize="btn--medium">
          جستجو
        </Button>
      </div>
    </div>
  );
}
