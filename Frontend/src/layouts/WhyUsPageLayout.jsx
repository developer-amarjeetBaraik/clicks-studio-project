import React from 'react'
import style from './WhyUsPageLayout.module.css'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

const WhyUsPageLayout = () => {
    return (
        <div className={style.whyUsDiv}>
            <div className={style.whyUsPointDiv}>
            <h3>Why Choose Clicks Studio?</h3>
            <ol>
                <li>
                    <h4>Passion for Storytelling</h4>
                    <p>At Clicks Studio, we believe every picture and video tells a story. Our passion lies in capturing those unique moments that make your story special.</p>
                </li>
                <li>
                    <h4>Expertise Meets Creativity</h4>
                    <p>With years of experience in photography and videography, we blend technical expertise with creative flair to deliver breathtaking results that exceed your expectations.</p>
                </li>
                <li>
                    <h4>Tailored to Your Vision</h4>
                    <p>Your moments are unique, and so are our services. We work closely with you to ensure that every shot reflects your style, personality, and emotions.</p>
                </li>
                <li>
                    <h4>High-Quality Deliverables</h4>
                    <p>We use state-of-the-art equipment and editing techniques to ensure premium quality photos and videos, giving you memories that stand the test of time.</p>
                </li>
                <li>
                    <h4>Diverse Services Under One Roof</h4>
                    <p>From candid photography to cinematic videography, weddings, corporate events, and portraits—our team handles it all with unmatched professionalism.

                    </p>
                </li>
                <li>
                    <h4>On-Time Delivery</h4>
                    <p>We respect your time. That’s why we’re committed to delivering your photos and videos promptly without compromising on quality.

                    </p>
                </li>
                <li>
                    <h4>Based in Ranchi, Available Everywhere</h4>
                    <p>While we’re proud to call Ranchi home, our passion knows no bounds. Whether it’s a local shoot or a destination event, we’re always ready to travel for your special moments.</p>
                </li>
                <li>
                    <h4>Trusted by Clients</h4>
                    <p>We’ve had the privilege of working with amazing clients and have built a reputation for reliability, professionalism, and exceptional results.</p>
                </li>
            </ol>
            </div>
            <div className={style.moreSomePointsDiv}>
            <h3>What Sets Us Apart?</h3>
            <ul>
                <li><h5>Personalized Approach:</h5> <p>Your satisfaction is our priority.</p></li>
                <li><h5>Unmatched Creativity:</h5><p>Turning moments into art.</p></li>
                <li><h5>Affordable Packages:</h5><p>High-quality services that fit your budget.
                </p></li>
            </ul>
            </div>
            <div className={style.callToActionDiv}>
                <h3>Let’s Capture Your Story Together</h3>
                <p>Your search for the perfect photography and videography team ends here. Discover the Clicks Studio difference and make your moments unforgettable!</p>

                <p><Link to={'tel:+91 8252944229'}>Call now</Link> Now to book your session or learn more about our services.</p>
            </div>
            <div className={style.formDiv}>
            <ContactForm />
            </div>
        </div>
    )
}

export default WhyUsPageLayout
