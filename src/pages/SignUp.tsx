// this component is a sign-up page
import SignUpForm from '../components/SignUp/SignUpForm';
import imagePage from '../assets/images/8.jpg'


export default function SignUp() {
    return (
        <div className='sign-up' style={{ backgroundImage: `url(${imagePage})` }}>
            <SignUpForm/>
        </div>
    );
}
