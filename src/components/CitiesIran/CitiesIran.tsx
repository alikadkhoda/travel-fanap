// this component render section cities iran
import { Link } from 'react-router-dom';
import CardCity from './CardCity';
import './CitiesIran.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

type City = {
    id: string;
    title: string;
    image: string;
}

export default function CitiesIran() {
    const [cities, setCities] = useState<City[]>([])
    // get cities
    useEffect(()=>{
        axios.get('http://localhost:3000/cities').then(res=>{
            setCities(res.data)
        })
    },[])
    return (
        <div className='cities'>
            <h2 className='cities_header'>شهرهای ایران</h2>
            <span className='cities_header_line'></span>
            <div className='morecites'>
                <Link className='morecities_link' to={'#'}>نمایش بیشتر</Link>
                <svg className='morecites_icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
            </div>
            <div className='cities_wrapper'>
                {
                    cities.map(city=>{
                        return(
                            <CardCity image={city.image} title={city.title} key={city.id} />
                        )
                    })
                }
            </div>
        </div>
    );
}
