// this component render individual cards within the Cards component.

import { Link } from 'react-router-dom';
type CardItem ={
    path: string;
    label: string;
    src: string;
    text: string;
}

export default function CardItem({path , label , src , text}: CardItem) {
  return (
    <li className='cards__item'>
            <Link className='cards__item__link' to={path} >
                <figure className='cards__item__pic__wrap' data-category={label}>
                    <img src={src} alt={src} className='cards__item__img'/>
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{text}</h5>
                </div>
            </Link>
        </li>

  )
}
