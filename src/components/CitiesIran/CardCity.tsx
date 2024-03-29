// this component render  Card with  image and title city
import { Link } from 'react-router-dom';
import './CitiesIran.css'

type CardCity ={
    image: string;
    title: string;
}

export default function CardCity({image,title}:CardCity) {
    return (
        <div className='card_city'>
            <div className='card_city_img'>
                <div className='card_city_cricle_cover'>
                 <div className='card_city_cricle' style={{backgroundImage: `url(${image})`}}></div> 
                </div>
                <img className='card_city_label' src="https://cdn.hamgardi.com/Static/img/home/offLable.png" alt="" />
            </div>
            <div className='card_city_title'>
                <Link to={'#'} className='card_city_title_link'>
                <h4>{title}</h4>
                </Link>
            </div>

        </div>
    );
}
