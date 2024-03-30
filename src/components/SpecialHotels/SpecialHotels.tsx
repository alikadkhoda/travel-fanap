// this component render  specialHotels section. includes CardHotel component
import { Link } from 'react-router-dom';
import CardHotel from './CardHotel';
import './SpecialHotels.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

type Hotel = {
    id: string;
    title: string;
    image: string;
}

export default function SpecialHotels() {
    const [hotels, setHotels] = useState<Hotel[]>([])
    // get hotels information
    useEffect(()=>{
        axios.get('http://localhost:3000/hotel').then(res=>{
            setHotels(res.data)
        })
    },[])
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
                hotels.map(hotel=>{
                    return(
                        <CardHotel image={hotel.image} title={hotel.title} key={hotel.id}/>
                    )
                })
               }
            </div>
        </div>
      );
}

