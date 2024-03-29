// this component renders Home page
import Cards from "../components/Cards/Cards";
import HeroSection from "../components/HeroSection/HeroSection";
import Slider from "../components/slider/Slider";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Slider/>
    </div>
  );
}
