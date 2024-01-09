import './Footer.css'

export default function Footer()
{
    return (
        <div className="footer-container">
            <button>START LEARNING<ion-icon name="book"></ion-icon></button>
            <div>
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-twitter"></ion-icon>
                <ion-icon name="logo-youtube"></ion-icon>
                <ion-icon name="logo-google"></ion-icon>
            </div>
            <div className='footer-text-div'>
                <p>© 2024 Copyright: Spike Technologies</p>
            </div>
        </div>
    )
}