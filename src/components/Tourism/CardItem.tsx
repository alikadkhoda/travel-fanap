// This component renders the help card
import './CardsGuide.css'

type CardItem = {
    src: string;
    alt: string;
    title: string;
    text: string;
}

export default function CardItem({src , alt , title , text}:CardItem) {
    return ( 
        <li className='cards__item'>
            <div className='compare-item'>
                <div className='compare-image-list'>
                    <img src={src} alt={alt}/>
                    <div className='compere-item-title'>
                        {title}
                    </div>
                    <div className='compare-item-exp'>
                        {text}
                    </div>
                </div>
            </div>
        </li>
     );
}

