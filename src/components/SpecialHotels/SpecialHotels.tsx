
import CardHotel from './CardHotel';
import './SpecialHotels.css'

const data = [
    {
        image:'//cdn.hamgardi.com/Images/Place/20180123151/300/Hamgardi_16063hmfa05.jpg' ,
        title:'هتل جهانگردی(جلفا)'
    },
    {
        image:'//cdn.hamgardi.com/Images/Place/20170703181/300/Hamgardi_1922y2xl795.jpg' ,
        title:'هتل دامون'
    },
    {
        image:'//cdn.hamgardi.com/Images/Place/20151010171/300/Hamgardi_3649yg4kiA3.jpg' ,
        title:'هتل آپارتمان سینا نور'
    },
    {
        image:'//cdn.hamgardi.com/Images/Place/20160905091/300/Hamgardi_0709ynbi710.jpg' ,
        title:'خانه بنی طبا'
    }
]


export default function SpecialHotels() {
    return (
        <div className='special__hotel'>
            <h2 className='special__hotel__header'>هتل‌های ویژه</h2>
            <span className="special__hotel__header__line"></span>
            <div className='carausel'>
               {
                data.map(item=>{
                    return(
                        <CardHotel image={item.image} title={item.title} key={item.title}/>
                    )
                })
               }
            </div>
        </div>
      );
}

