import React from 'react'

const PapularProducts = () => {
    return (
        <div className='products'>
            <div className='container'>
                <div className='products-parent'>
                    <h3>popular products</h3>
                    <div className='products-list'>
                        <div>
                            <img src={require('../../images/1.png')} />
                            <h4>OTTOMAN CHAIR</h4>
                            <span className='price'>$250.00</span>
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div>
                            <img src={require('../../images/2.png')} />
                            <h4>TAKATA LEMNOS CLOCK</h4>
                            <span className='price'>$49.00</span>
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div>
                            <img src={require('../../images/3.png')} />
                            <h4>WALLNUT WALL CLOCK</h4>
                            <span className='price'>$79.00</span>
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div>
                            <img src={require('../../images/4.png')} />
                            <h4>KIME CHAIR</h4>
                            <span className='price'>$49.00</span>
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div>
                            <img src={require('../../images/5.png')} />
                            <h4>KIME TEA CADDY</h4>
                            <span className='price'>$29.00</span>
                            <div>
                            </div>
                        </div>
                        <div>
                            <img src={require('../../images/6.png')} />
                            <h4>MINAMO VASE SET</h4>
                            <span className='price'>$129.00</span>
                            <div>
                            </div>
                        </div>
                        <div>
                            <img src={require('../../images/7.png')} />
                            <h4>HORRISON TABLE</h4>
                            <span className='price'>$370.00</span>
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div>
                            <img src={require('../../images/8.png')} />
                            <h4>EARPHONE CASE</h4>
                            <span className='price'>$29.00</span>
                            <div>
                            </div>
                        </div>
                    </div>
                    <button>All Products</button>
                </div>
            </div>
        </div>
    )
}

export default PapularProducts