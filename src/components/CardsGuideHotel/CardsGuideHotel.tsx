
import CardItem from '../Tourism/CardItem';
import './CardsGuideHotel.css'


export default function CardsGuideHotel() {
    return ( 
        <div className='cards'>
       <h1>رزرو آنلاین هتل</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__item'>
                    <CardItem src={'https://cdn.hamgardi.com/static/Img/internal/compare.png'}
                     alt='image' title='رزرو اقامتگاه' text='راهنمای جامع رزرو هتل‌ها و اقامتگاه‌ها'/>
                     <CardItem src={'https://cdn.hamgardi.com/static/Img/internal/compare.png'}
                     alt='image' title='جستجوی آسان' text='جستجوی تمام هتل‌ها و اقامتگاها'/>
                     <CardItem src={'https://cdn.hamgardi.com/static/Img/internal/compare.png'}
                     alt='image' title='پشتیبانی 24 ساعته' text='24 ساعته و در تمام روزهای هفته'/>
                </ul>
            </div>
        </div>
    </div>
    );
}
