// this component render section cities iran
import { Link } from 'react-router-dom';
import CardCity from './CardCity';
import './CitiesIran.css'

const data = [
    {
        "id": "1",
        "image": "/assets/images/cities/Hamgardi_3932u7je0C9.jpg",
        "title": "جهرم"
      },
      {
        "id": "2",
        "image": "/assets/images/cities/Hamgardi_393715u7183.jpg",
        "title": "قم"
      },
      {
        "id": "3",
        "image": "/assets/images/cities/Hamgardi_39214pa5iAB.jpg",
        "title": "شوشتر"
      }
]


export default function CitiesIran() {
   
    return (
        <div className='cities'>
            <h2 className='cities_header'>شهرهای ایران</h2>
            <span className='cities_header_line'></span>
            <div className='morecites'>
                <Link className='morecities_link' to={'#'}>نمایش بیشتر</Link>
                <svg className='morecites_icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
            </div>
            <div className='cities_wrapper'>
                {
                    data.map(city=>{
                        return(
                            <CardCity image={city.image} title={city.title} key={city.id} />
                        )
                    })
                }
            </div>
        </div>
    );
}
