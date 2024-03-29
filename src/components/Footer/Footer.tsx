 // this component render footer website. includes communication channels and newsletters
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Footer.css'

 
 export default function Footer() {
   return (
    <div className='footer-container'>
    <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            به خبرنامه ما بپیوندید تا از آفرهای تورهای ایرانگردی و جهانگردی با خبر شوید
        </p>
        <p className='footer-subscription-text'>
            هر زمان که بخواهید می‌توانید عضویت خود را لفو کنید
        </p>
        <div>
            <form>
                <input className='footer-input' type="email" name="email" placeholder='لطفا ایمیل خود را وارد کنید' />
                <Button buttonStyle='btn--special' buttonSize='btn--medium'>عضویت</Button>
            </form>
        </div>
    </section>
    <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>درباره ما</h2>
                <Link to={'/'}>موقعیت‌های شغلی</Link>
                <Link to={'/'}>تماس با ما</Link>
                <Link to={'/'}>همکاری با ما</Link>
            </div>
            <div className="footer-link-items">
                <h2>راهنما</h2>
                <Link to="/">نقشه سایت</Link>
                <Link to="/">سوال های متداول</Link>
                <Link to="/">حریم شخصی</Link>
            </div>
        </div>
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>رزور </h2>
                <Link to="/">رزور هتل</Link>
                <Link to="/">رزور بلیط هواپیما</Link>
                <Link to="/">رزرو بلیط قطار</Link>
            </div>
            <div className="footer-link-items">
                <h2 style={{ fontSize: '20px', width: '161px' }}> شبکه های اجتماعی </h2>
                <Link to="/">اینستاگرام</Link>
                <Link to="/">توییتر</Link>
                <Link to="/">لینکدین</Link>
            </div>
        </div>
    </div>
    <section className='social-media'>
        <div className='social-media-wrap'>
            <div className='footer-logo'>
                <Link to={'/'} className='social-logo'>
                    Travel 
                </Link>
            </div>
            <small className='website-rights'>
                Travel &copy; 2024
            </small>
            <div className='social-icons'>
                <Link to={'/'} className='social-icon-link'>
                    <i className='fab fa-facebook-f'/>
                </Link>
                <Link to={'/'} className='social-icon-link'>
                    <i className='fab fa-instagram'/>
                </Link>
                <Link to={'/'} className='social-icon-link'>
                    <i className='fab fa-twitter'/>
                </Link>
                <Link to={'/'} className='social-icon-link'>
                    <i className='fab fa-linkedin'/>
                </Link>
            </div>
        </div>
    </section>
</div>
   )
 }
 
