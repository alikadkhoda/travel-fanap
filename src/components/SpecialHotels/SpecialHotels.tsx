// this component render  specialHotels section. includes CardHotel component
import { Link } from 'react-router-dom';
import CardHotel from './CardHotel';
import './SpecialHotels.css'

const data = [
    {
        "id": "1",
        "image": "/assets/images/hotels/Hamgardi_16063hmfa05.jpg",
        "title": "هتل جهانگردی(جلفا)"
      },
      {
        "id": "2",
        "image": "/assets/images/hotels/Hamgardi_3649yg4kiA3.jpg",
        "title": "هتل دامون"
      },
      {
        "id": "3",
        "image": "/assets/images/hotels/Hamgardi_1922y2xl795.jpg",
        "title": "هتل آپارتمان سینا نور"
      },
      {
        "id": "4",
        "image": "/assets/images/hotels/Hamgardi_0709ynbi710.jpg",
        "title": "خانه بنی طبا"
      }
]

export default function SpecialHotels() {
    return (
        <div className='special__hotel'>
            <h2 className='special__hotel__header'>هتل‌های ویژه</h2>
            <span className="special__hotel__header__line"></span>
            <div className='morecites'>
                <Link className='morecities_link' to={'#'}>نمایش بیشتر</Link>
                <svg className='morecites_icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>

            </div>
            <div className='carausel'>
               {
                data.map(hotel=>{
                    return(
                        <CardHotel image={hotel.image} title={hotel.title} key={hotel.id}/>
                    )
                })
               }
            </div>
        </div>
      );
}

