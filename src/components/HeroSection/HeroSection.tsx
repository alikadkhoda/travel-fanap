
import Button from '../Button/Button';
import './HeroSection.css'
import Video from '../../assets/videos/1.mp4'

export default function HeroSection() {
  return (
   <div className='hero-container'>
   <video src={Video} autoPlay loop muted />
    <div className='hero-buttons'>
       <input className='search-input' type="text" placeholder='جستجوی مکان،شهر،کشور و ...'  />
       <Button buttonStyle='btn--search' buttonSize='btn--medium'>
          جستجو
       </Button>
    </div>
  
</div>
  )
}

