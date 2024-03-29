// this component render section cards

import CardItem from './CardItem';
import './Cards.css'
import image9 from '../../assets/images/9.jpg'
import image8 from '../../assets/images/8.jpg'
import image2 from '../../assets/images/2.jpg'
import image1 from '../../assets/images/1.jpg'
import image6 from '../../assets/images/6.jpg'

export default function Cards() {
  return (
    <div className='cards'>
            <h1>مقاصد برتر</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        path={'/'} 
                        label={'ناشناخته‌ها'} 
                        src={image9}
                        text={'دیدن آبشار ناشناخته در دل آمازون'}/>
                        <CardItem 
                        path={'/'} 
                        label={'ناشناخته‌ها'} 
                        src={image8}
                        text={'کویری در دل ایران'}/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src={image2}
                            text="سفری خاطره انگیز در جزایر کارائیب"
                            label="لاکچری"
                            path="/dervices"
                        />
                        <CardItem 
                            src={image1}
                            text="آرامشی عمیق در رشته کوه های آلپ"
                            label="لاکچری"
                            path="/dervices"
                        />
                        <CardItem 
                            src={image6}
                            text="تجربه ای متفاوت از گردش در یک شهر"
                            label="ناشناخته"
                            path="/dervices"
                        />
                    </ul>
                </div>
            </div>
        </div>
  )
}

