// this component renders help cards section
import CardItem from './CardItem';
import './CardsGuide.css'

export default function CardsGuide() {
    return ( 
        <div className='cards'>
            <h1>بهترین راهنمای ایرانگردی، جهانگردی، خرید بلیط هواپیما، راهنمای اخذ ویزا، رزرو هتل و مکان‌های اقامتی و مکان‌های گردشگری </h1>
            <p>پرتال جامع گردش و سفر</p>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__item'>
                        <CardItem src={'https://cdn.hamgardi.com/static/Img/internal/compare.png'}
                         alt='image' title='دانستنی‌ها' text='معرفی جذابیت‌های ایران و جهان'/>
                         <CardItem src={'https://cdn.hamgardi.com/static/Img/internal/compare.png'}
                         alt='image' title='جستجوی پیشرفته' text='جستجوی تمامی مقاصد سفرهای شما'/>
                         <CardItem src={'https://cdn.hamgardi.com/static/Img/internal/compare.png'}
                         alt='image' title='راهنمای جامع گردش و تفریح' text='راهنمای سفر به شهرهای ایران و جهان'/>
                    </ul>
                </div>
            </div>
        </div>
     );
}
