import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='footer-parent'>
                    <div className='about'>
                        <h1>AXflash</h1>
                        <p>WE ARE EAGER TO HELP YOU TO MAKE
                            YOUR HOUSE MORE BEAUTIFUL,
                            MORE LIVABLE WITH AN AFFORDABLE
                            PRICE & GOOD QUALITY OF FURNITURES.
                        </p>
                        <div className='media'>
                            <a href='#'><i class="fa-brands fa-facebook"></i></a>
                            <a href='#'><i class="fa-brands fa-github"></i></a>
                            <a href='#'><i class="fa-brands fa-tiktok"></i></a>
                        </div>
                    </div>
                    <div className='shop'>
                        <h4>Shope</h4>
                        <ul>
                            <li>Our Stores</li>
                            <li>Cart</li>
                            <li>My Account</li>
                            <li>Wishlist</li>
                        </ul>
                    </div>
                    <div className='help'>
                        <h4>Help</h4>
                        <ul>
                            <li>Contact</li>
                            <li>FaQs</li>
                            <li>Resturns</li>
                            <li>Shipping</li>
                            <li>Guides</li>
                        </ul>
                    </div>
                    <div className='news-letter'>
                        <h4>Newsletter</h4>
                        <div className='sub'>
                            <input type='text' placeholder='Enter Email' />
                            <button>Subscribe</button>
                        </div>
                        <p>
                            I want emails from Minim with products information,
                            promotions, advertisements.
                            I can unsubscribe any time using
                            the unsubscribe at the end of all emails.
                            Contact Minim here.
                            Read our Privacy Policy.
                        </p>
                    </div>
                </div>
                <div className='copy-right'>
                    <p>Copyright &copy; 2023 AbdellahX</p>
                    <ul>
                        <li>PRIVACY POLICY</li>
                        <li>TERMS OF SERVICES</li>
                        <li>AFFILIATION</li>
                        <li>SPONSORS</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer