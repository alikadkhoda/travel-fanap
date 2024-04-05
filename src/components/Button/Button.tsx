// this is a Button component where have STYELS and SIZES variable for setting button

import './Button.css'

const STYELS=['btn--primary','btn--outline', 'btn--special', 'btn--search', 'btn--search--place', 'btn--tour']
const SIZES=['btn--medium', 'btn--large']

type Button = {
    buttonStyle:string;
    to?: string;
    children: string;
    buttonSize: string
}
export default function Button(props:Button) {
    const {children,buttonStyle, buttonSize}=props
    const ButtonStyle= STYELS.includes(buttonStyle) ? buttonStyle:STYELS[0]
    const ButtonSize=SIZES.includes(buttonSize) ? buttonSize:SIZES[0]
    
    return (  
            <button  className={`btn btn-mobile ${ButtonSize} ${ButtonStyle}`}>
                {children}
            </button>
     );
}

