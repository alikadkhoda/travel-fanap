// this component render  Card with  image and title hotel
import { Link } from 'react-router-dom';
import './SpecialHotels.css';
type CardHotel = {
    image: string;
    title: string;
}
export default function CardHotel({image,title}:CardHotel) {
    return (
        <div className='carausel__item'>
            <img src={image} alt={title} />
            <div className='carausel__info'>
                <h4>
                <Link to={'#'} className='carausel__info__title'>{title}</Link>
                </h4>
                <Link to={'#'} className='carausel__info__btn'>جزییات</Link>
            </div>
        </div>
    );
}
