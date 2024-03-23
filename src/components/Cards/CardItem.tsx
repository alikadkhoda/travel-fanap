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
    // <li className='card1'>
    //     <Link className='card-link' to={path}>
    //         <img className='card-img' src={src} alt={src} data-category={label} />
    //     </Link>
    //     <div className='content'>
    //         <h5 className='text'>{text}</h5>
    //     </div>
    // </li>
    //  <div className="card">
    //  <img src="img_avatar.png" alt="Avatar" style="width:100%"/>
    //  <div className="container">
    //    <h4><b>John Doe</b></h4>
    //    <p>Architect & Engineer</p>
    //  </div>
  //  </div> 
  )
}
