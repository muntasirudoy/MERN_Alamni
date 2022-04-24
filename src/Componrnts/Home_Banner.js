import React from 'react'

const Home_Banner = () => {
  return (
<div className="page-content">
    <div className="container">
        {/* <!-- Banner Area Start --> */}
        <div className="newsfeed-banner">
            <div className="media">
                <div className="item-icon">
                    <i className="icofont-megaphone-alt"></i>
                </div>
                <div className="media-body">
                    <h1 className="item-title">Shaheen Academy <br/> <span>Alamni</span> Newsfeed</h1>
                    <p>Check what your friends have been up to!</p>
                </div>
            </div>
            <ul className="animation-img">
                <li data-sal="slide-down" data-sal-duration="800" data-sal-delay="400"><img src="media/banner/shape_7.png" alt="shape"/></li>
                <li data-sal="slide-up" data-sal-duration="500"><img src="media/banner/people_2.png" alt="shape"/></li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default Home_Banner