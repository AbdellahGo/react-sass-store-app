import React from 'react'
import homeImg from '../../images/bg-slide1-v3.jpg';
const Home = () => {
    return (
        <div className='home'>
            <div className='container'>
                <div className='home-parent'>
                    <img src={homeImg} />
                    <div className='category'>
                        <span>Desk Lamp</span>
                        <span>Collection</span>
                    </div>
                    <h2 className='product-name'>
                        Oma-Circular lamp
                    </h2>
                    <ul className='slider-switch'>
                        <li>01</li>
                        <li>02</li>
                        <li>03</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home