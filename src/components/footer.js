import { FaFacebookSquare, FaTwitterSquare, FaLinkedinIn, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div>
                <h4>GET IN TOUCH</h4>
                <ul>
                    <li><a href="tel:+234-907-957-7366">+234-907-957-7366</a></li>
                    <li><a href="mailto:hello@sidehustle.n">hello@sidehustle.ng</a></li>
                    <li><a href="mailto:support@sidehustle.ng">support@sidehustle.ng</a></li>
                </ul>
            </div>

            <div>
                <h4>COMPANY</h4>
                <ul>
                    <li><a href="https://lms.terrahq.co/privacy-policies" target="_blank" rel="noreferrer">Privacy Policy</a></li>
                    <li><a href="https://lms.terrahq.co/terms-and-conditions" target="_blank" rel="noreferrer">Terms of Use</a></li>
                </ul>
            </div>

            <div>
                <h4>CONNECT WITH US</h4>
                <ul className='footer-icons'>
                    <li><a href="https://ng.linkedin.com/company/side-hustle-internship" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
                    <li><a href="https://www.facebook.com/SideHustleNigeria/about/" target="_blank" rel="noreferrer"><FaFacebookSquare /></a></li>
                    <li><a href="https://twitter.com/ngsidehustle" target="_blank" rel="noreferrer"><FaTwitterSquare /></a></li>
                    <li><a href="https://www.instagram.com/sidehustleinternship/?hl=en" target="_blank" rel="noreferrer"><FaInstagramSquare /></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
