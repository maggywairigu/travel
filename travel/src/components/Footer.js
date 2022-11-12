import React from 'react'
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    <script src="https://kit.fontawesome.com/c61c466504.js" crossorigin="anonymous"></script>
  return (
    <div className='footercontainer'>
        <section className='footersubscription'>
            <p className='footersubscriptionheading'>
                Join the Adventure newsletter to recieve our best vacation deals.
            </p>
            <p className='footersubscriptiontext'>
                You can unsubscribe at any time.
            </p>
            <div className='inputareas'>
                <form>
                    <input type='email' name="email" placeholder='Your Email' className='footerinput' />
                    <Button buttonStyle="btn--outline">Subscribe</Button>
                </form>
            </div>
        </section>
        <div className='footerlinks'>
            <div className='footerlinkwrapper'>
                <div className='footerlinkitems'>
                    <h2>About us</h2>
                    <Link to='/signup'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Services</Link>
                </div>
            </div>
            <div className='footerlinkwrapper'>
                <div className='footerlinkitems'>
                    <h2>About us</h2>
                    <Link to='/signup'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Services</Link>
                </div>
            </div>
            <div className='footerlinkwrapper'>
                <div className='footerlinkitems'>
                    <h2>About us</h2>
                    <Link to='/signup'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Services</Link>
                </div>
            </div>
            <div className='footerlinkwrapper'>
                <div className='footerlinkitems'>
                    <h2>About us</h2>
                    <Link to='/signup'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Services</Link>
                </div>
            </div>
            <div className='footerlinkwrapper'>
                <div className='footerlinkitems'>
                    <h2>About us</h2>
                    <Link to='/signup'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Services</Link>
                </div>
            </div>
        </div>
        <section className='socialmedia'>
            <div className='socialmediawrap'>
                <div className='footerlogo'>
                    <Link className='sociallogo'>TRVL <i class="fa-sharp fa-solid fa-truck-monster"></i></Link>
                </div>
                <small className='websiterights'>TRVL © 2022</small>
                <div className='socialicons'>
                    <Link className='socialiconfb'><i class="fa-sharp fa-solid fa-facebook-f" to="/" target="blank" aria-label='Facebook'></i></Link>
                    <Link className='socialiconfb'><i class="fa-sharp fa-solid fa-instagram" to="/" target="blank" aria-label='Instagram'></i></Link>
                    <Link className='socialiconfb'><i class="fa-sharp fa-solid fa-twitter" to="/" target="blank" aria-label='Twitter'></i></Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer