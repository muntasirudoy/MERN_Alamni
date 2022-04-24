import React, { useEffect } from 'react'
import {Helmet} from "react-helmet";
import { NavLink } from 'react-router-dom';
const Header = () => {







  return (
<>
<Helmet title='hello'></Helmet>
    <div class="wrapper">
        <header className="fixed-header ">
            <div className="header-menu">
                <div className="navbar">
                    <div className="nav-item d-none d-sm-block">
                        <div className="header-logo">
                            <a href="index-2.html"><img src="media/logo.png" alt="Cirkle"/></a>
                            
                        </div>
                    </div>
                    <div className="nav-item nav-top-menu">
                        <nav className="dropdowns template-main-menu">
                            <ul className="menu-content">
                                <li className="header-nav-item">
                                    <a href="index-2.html" className="menu-link active">Home</a>
                                </li>
                                <li className="header-nav-item">
                                    <a href="#" className="menu-link have-sub">Community</a>
                                    <ul className="mega-menu mega-menu-col-2">
                                        <li>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="newsfeed.html">NewsFeed</a>
                                                </li>
                                                <li>
                                                    <a href="user-timeline.html">Profile Timeline</a>
                                                </li>
                                                <li>
                                                    <a href="user-about.html">Profile About</a>
                                                </li>
                                                <li>
                                                    <a href="user-friends.html">Profile Friends</a>
                                                </li>
                                                <li>
                                                    <a href="user-groups.html">Profile Group</a>
                                                </li>
                                                <li>
                                                    <a href="user-photo.html">Profile Photo</a>
                                                </li>
                                                <li>
                                                    <a href="user-video.html">Profile Video</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="user-badges.html">Profile Badges</a>
                                                </li>
                                                <li>
                                                    <a href="forums.html">Forums</a>
                                                </li>
                                                <li>
                                                    <a href="forums-forum.html">Forums Topic</a>
                                                </li>
                                                <li>
                                                    <a href="forums-timeline.html">Forums Timeline</a>
                                                </li>
                                                <li>
                                                    <a href="forums-info.html">Forums Info</a>
                                                </li>
                                                <li>
                                                    <a href="forums-members.html">Forums Members</a>
                                                </li>
                                                <li>
                                                    <a href="forums-media.html">Forums Media</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="header-nav-item">
                                    <a href="#" className="menu-link have-sub">Pages</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="about-us.html">About</a>
                                        </li>
                                        <li>
                                            <a href="user-blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="shop.html">Shop</a>
                                        </li>
                                        <li>
                                            <a href="single-blog.html">Blog Details</a>
                                        </li>
                                        <li>
                                            <a href="single-shop.html">Shop Details</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact Us</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="nav-item header-control">
                        <div className="inline-item d-none d-md-block">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search here......."/>
                                <div className="input-group-append">
                                    <button className="submit-btn" type="button"><i className="icofont-search"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="inline-item d-flex align-items-center">
                            <div className="dropdown dropdown-cart">
                                <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                    <i className="icofont-shopping-cart"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="item-heading">
                                        <h6 className="heading-title">Shopping Cart: <span>3</span></h6>
                                    </div>
                                    <div className="item-body">
                                        <div className="media">
                                            <div className="item-img">
                                                <img src="media/figure/cart_1.jpg" alt="Product"/>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="item-title"><a href="#">Black Coffee Mug</a></h6>
                                                <div className="item-category">COFFEE MUGS</div>
                                                <div className="item-price">$29 x 1</div>
                                                <div className="btn-area">
                                                    <a href="#" className="close-btn"><i className="icofont-ui-close"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <img src="media/figure/cart_2.jpg" alt="Product"/>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="item-title"><a href="#">Head Phone</a></h6>
                                                <div className="item-category">Assets</div>
                                                <div className="item-price">$15 x 1</div>
                                                <div className="btn-area">
                                                    <a href="#" className="close-btn"><i className="icofont-ui-close"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <img src="media/figure/cart_3.jpg" alt="Product"/>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="item-title"><a href="#">Black Watch</a></h6>
                                                <div className="item-category">Watch</div>
                                                <div className="item-price">$59 x 1</div>
                                                <div className="btn-area">
                                                    <a href="#" className="close-btn"><i className="icofont-ui-close"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-footer">
                                        <a href="#" className="view-btn">View All Product</a>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown dropdown-friend">
                                <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                    <i className="icofont-users-alt-4"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="item-heading">
                                        <h6 className="heading-title">Friend Requests</h6>
                                        <div className="heading-btn">
                                            <a href="#">Settings</a>
                                            <a href="#">Mark all as Read</a>
                                        </div>
                                    </div>
                                    <div className="item-body">
                                        <div className="media">
                                            <div className="item-img">
                                                <img src="media/figure/chat_5.jpg" alt="Notify"/>
                                                <span className="chat-status offline"></span>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="item-title"><a href="#">Lily Zaman</a></h6>
                                                <p>4 in mutual friends</p>
                                                <div className="btn-area">
                                                    <a href="#" className="item-btn"><i className="icofont-plus"></i></a>
                                                    <a href="#" className="item-btn"><i className="icofont-minus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <img src="media/figure/chat_1.jpg" alt="Notify"/>
                                                <span className="chat-status online"></span>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="item-title"><a href="#">Ketty Rose</a></h6>
                                                <p>3 in mutual friends</p>
                                                <div className="btn-area">
                                                    <a href="#" className="item-btn"><i className="icofont-plus"></i></a>
                                                    <a href="#" className="item-btn"><i className="icofont-minus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <img src="media/figure/chat_8.jpg" alt="Notify"/>
                                                <span className="chat-status online"></span>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="item-title"><a href="#">Rustom vai</a></h6>
                                                <p>6 in mutual friends</p>
                                                <div className="btn-area">
                                                    <a href="#" className="item-btn"><i className="icofont-plus"></i></a>
                                                    <a href="#" className="item-btn"><i className="icofont-minus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-footer">
                                        <a href="#" className="view-btn">View All Friend Request</a>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown dropdown-message">
                                <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                    <i className="icofont-speech-comments"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="item-heading">
                                        <h6 className="heading-title">Message</h6>
                                        <div className="heading-btn">
                                            <a href="#">Settings</a>
                                            <a href="#">Mark all as Read</a>
                                        </div>
                                    </div>
                                    <div className="item-body">
                                        <a href="#" className="media">
                                            <div className="item-img">
                                                <img src="media/figure/notifiy_1.png" alt="Notify"/>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="item-title">Diana Jameson</h6>
                                                <div className="item-time">15 mins ago</div>
                                                <p>when are nknowen printer took galley of types ...</p>
                                            </div>
                                        </a>
                                        <a href="#" className="media">
                                            <div className="item-img">
                                                <img src="media/figure/notifiy_2.png" alt="Notify"/>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="item-title">Quirty</h6>
                                                <div className="item-time">15 mins ago</div>
                                                <p>when are nknowen printer took galley of types ...</p>
                                            </div>
                                        </a>
                                        <a href="#" className="media">
                                            <div className="item-img">
                                                <img src="media/figure/notifiy_3.png" alt="Notify"/>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="item-title">Zinia Jessy</h6>
                                                <div className="item-time">15 mins ago</div>
                                                <p>when are nknowen printer took galley of types ...</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="item-footer">
                                        <a href="#" className="view-btn">View All Messages</a>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown dropdown-notification">
                                <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                    <i className="icofont-notification"></i><span className="notify-count">3</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="item-heading">
                                        <h6 className="heading-title">Notifications</h6>
                                        <div className="heading-btn">
                                            <a href="#">Settings</a>
                                            <a href="#">Mark all as Read</a>
                                        </div>
                                    </div>
                                    <div className="item-body">
                                        <a href="#" className="media">
                                            <div className="item-img">
                                                <img src="media/figure/notifiy_1.png" alt="Notify"/>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="item-title">Diana Jameson</h6>
                                                <div className="item-time">15 mins ago</div>
                                                <p>when are nknowen printer took galley of types ...</p>
                                            </div>
                                        </a>
                                        <a href="#" className="media">
                                            <div className="item-img">
                                                <img src="media/figure/notifiy_2.png" alt="Notify"/>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="item-title">Quirty</h6>
                                                <div className="item-time">15 mins ago</div>
                                                <p>when are nknowen printer took galley of types ...</p>
                                            </div>
                                        </a>
                                        <a href="#" className="media">
                                            <div className="item-img">
                                                <img src="media/figure/notifiy_3.png" alt="Notify"/>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="item-title">Zinia Jessy</h6>
                                                <div className="item-time">15 mins ago</div>
                                                <p>when are nknowen printer took galley of types ...</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="item-footer">
                                        <a href="#" className="view-btn">View All Notification</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inline-item">
                            <div className="dropdown dropdown-admin">
                                <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                    <span className="media">
                                        <span className="item-img">
                                            <img src="media/figure/chat_5.jpg" alt="Chat"/>
                                            <span className="acc-verified"><i className="icofont-check"></i></span>
                                        </span>
                                        <span className="media-body">
                                            <span className="item-title">Rebeca</span>
                                        </span>
                                    </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <ul className="admin-options">
                                        <li><a href="#">Profile Settings</a></li>
                                        <li><a href="user-groups.html">Groups</a></li>
                                        <li><a href="forums.html">Forums</a></li>
                                        <li><a href="#">Settings</a></li>
                                        <li><a href="#">Terms and Conditions</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="login.html">Log Out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </div>
    </>
  )
}

export default Header