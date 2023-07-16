import React from 'react'

const LastNews = () => {
    return (
        <div className='last-news'>
            <div className='container'>
                <div className='news-parent'>
                    <h3>latest news</h3>
                    <div className='news-list'>
                        <div className='news'>
                            <div className='image'>
                                <img src={require('../../images/blog-v1.jpg')} />
                            </div>
                            <div className='content'>
                                <span>Architect</span>
                                <h4>House in Hamilton</h4>
                                <p>Lorem ipsum dolor
                                    sit amet, consect etur
                                    sapien adipiscing elit.
                                    Mauris vel auctorol....
                                </p>
                                <span>Read More</span>
                            </div>
                        </div>
                        <div className='news'>
                            <div className='image'>
                                <img src={require('../../images/blog-v2.jpg')} />
                            </div>
                            <div className='content'>
                                <span>Trending</span>
                                <h4>2018 color trends for your home interior</h4>
                                <p>Lorem ipsum dolor sit amet,
                                    consect etur sapien adipiscing
                                    elit. Mauris vel auctorol....
                                </p>
                                <span>Read More</span>
                            </div>
                        </div>
                        <div className='news'>
                            <div className='image'>
                                <img src={require('../../images/blog-v3.jpg')} />
                            </div>
                            <div className='content'>
                                <span>Tips & Tricks</span>
                                <h4>7 thoughts on simplifying your furniture</h4>
                                <p>Lorem ipsum dolor sit amet,
                                    consect etur sapien adipiscing elit.
                                    Mauris vel auctorol....

                                </p>
                                <span>Read More</span>
                            </div>
                        </div>
                    </div>
                    <button>All Blog Post</button>
                </div>
            </div>
        </div>
    )
}

export default LastNews