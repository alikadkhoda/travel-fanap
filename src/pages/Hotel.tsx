// this component renders Hotel page

import { ChangeEvent, useState } from 'react';
import Button from '../components/Button/Button';
import imageHotel from '../assets/images/3.jpg'
import CardsGuideHotel from '../components/CardsGuideHotel/CardsGuideHotel';
import SpecialHotels from '../components/SpecialHotels/SpecialHotels';
import CitiesIran from '../components/CitiesIran/CitiesIran';




export default function Hotel() {
    const [hotelInfo, setHotelInfo]= useState({
        city:'',
        date:'',
        time:''
    })
    // handle search inputs (controlled component)
    const handleHotelInfo=(e:ChangeEvent<HTMLInputElement>)=>{
        setHotelInfo({
            ...hotelInfo,
            [e.target.name]:e.target.value
        })
    }
    return ( 
        <>
        <div className='hotel' style={{ backgroundImage: `url(${imageHotel})` }}>
               
               <div className='tourism-box'>
                   <input type="text" name="city" value={hotelInfo.city} onChange={handleHotelInfo} className='search-input' placeholder='نام کشور، شهر و یا نام هتل'autoComplete={"off"} />
                   <input type="text" name="date" value={hotelInfo.date} onChange={handleHotelInfo} className='search-input' placeholder='تاریخ ورود' autoComplete={"off"} />
                   <input type="text" name="time" value={hotelInfo.time} onChange={handleHotelInfo} className='search-input' placeholder='مدت اقامت' autoComplete={"off"} />
                   <Button buttonStyle='btn--search--place' buttonSize='btn--medium'>
                       جستجوی
                   </Button>
               </div>
           </div>
           <CardsGuideHotel />
           <SpecialHotels />
           <CitiesIran/>
        </>
        
     );
}
