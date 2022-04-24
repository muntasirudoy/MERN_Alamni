import React from 'react'

const Home_Wget = () => {
  return (
  <>

                        <div className="widget widget-author">
                            <div className="author-heading">
                                <div className="cover-img">
                                    <img src="media/figure/shape_12.jpg" alt="cover"/>
                                </div>
                                <div className="profile-img">
                                    <a href="#">
                                        <img src="media/figure/author_1.jpg" alt="author"/>
                                    </a>
                                </div>
                                <div className="profile-name">
                                    <h4 className="author-name"><a href="#">Rebeca Powel</a></h4>
                                    <div className="author-location">United State Of America</div>
                                </div>
                            </div>
                            <ul className="author-badge">
                                <li><a href="#" className="bg-salmon-gradient"><i className="icofont-star"></i></a></li>
                                <li><a href="#" className="bg-amethyst-gradient"><i className="icofont-ui-play"></i></a></li>
                                <li><a href="#" className="bg-sun-gradient"><i className="icofont-squirrel"></i></a></li>
                                <li><a href="#" className="profile-circle">+5</a></li>
                            </ul>
                            <ul className="author-statistics">
                                <li>
                                    <a href="#"><span className="item-number">30</span> <span className="item-text">POSTS</span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="item-number">12</span> <span className="item-text">COMMENTS</span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="item-number">1,125</span> <span className="item-text">VIEWS</span></a>
                                </li>
                            </ul>
                        </div>
                        <div className="widget widget-memebers">
                            <div className="widget-heading">
                                <h3 className="widget-title">Members</h3>
                                <div className="dropdown">
                                    <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                        ...
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">Close</a>
                                        <a className="dropdown-item" href="#">Edit</a>
                                        <a className="dropdown-item" href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#newest-member" role="tab" aria-selected="true">NEWEST</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#popular-member" role="tab" aria-selected="false">POPULAR</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#active-member" role="tab" aria-selected="false">ACTIVE</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="newest-member" role="tabpanel">
                                    <div className="members-list">
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/figure/chat_1.jpg" alt="Chat"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Aahat Akter</a></h4>
                                                <div className="item-username">@Aahat </div>
                                                <div className="member-status online"><i className="icofont-check"></i></div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/figure/chat_2.jpg" alt="Chat"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Kazi Rahman</a></h4>
                                                <div className="item-username">@Rahman</div>
                                                <div className="member-status online"><i className="icofont-check"></i></div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/figure/chat_3.jpg" alt="Chat"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Alia Karon</a></h4>
                                                <div className="item-username">@Alia</div>
                                                <div className="member-status online"><i className="icofont-check"></i></div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/figure/chat_4.jpg" alt="Chat"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Masterero</a></h4>
                                                <div className="item-username">@Master</div>
                                                <div className="member-status offline"><i className="icofont-check"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="popular-member" role="tabpanel">
                                    <div className="members-list">
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/figure/chat_1.jpg" alt="Chat"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Aahat Akter</a></h4>
                                                <div className="item-username">@Aahat </div>
                                                <div className="member-status online"><i className="icofont-check"></i></div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/figure/chat_2.jpg" alt="Chat"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Kazi Rahman</a></h4>
                                                <div className="item-username">@Rahman</div>
                                                <div className="member-status online"><i className="icofont-check"></i></div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/figure/chat_3.jpg" alt="Chat"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Alia Karon</a></h4>
                                                <div className="item-username">@Alia</div>
                                                <div className="member-status online"><i className="icofont-check"></i></div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/figure/chat_4.jpg" alt="Chat"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Masterero</a></h4>
                                                <div className="item-username">@Master</div>
                                                <div className="member-status offline"><i className="icofont-check"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="active-member" role="tabpanel">
                                    <div className="members-list">
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/figure/chat_1.jpg" alt="Chat"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Aahat Akter</a></h4>
                                                <div className="item-username">@Aahat </div>
                                                <div className="member-status online"><i className="icofont-check"></i></div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/figure/chat_2.jpg" alt="Chat"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Kazi Rahman</a></h4>
                                                <div className="item-username">@Rahman</div>
                                                <div className="member-status online"><i className="icofont-check"></i></div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/figure/chat_3.jpg" alt="Chat"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Alia Karon</a></h4>
                                                <div className="item-username">@Alia</div>
                                                <div className="member-status online"><i className="icofont-check"></i></div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/figure/chat_4.jpg" alt="Chat"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Masterero</a></h4>
                                                <div className="item-username">@Master</div>
                                                <div className="member-status offline"><i className="icofont-check"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="widget widget-groups">
                            <div className="widget-heading">
                                <h3 className="widget-title">Groups</h3>
                                <div className="dropdown">
                                    <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                        ...
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">Close</a>
                                        <a className="dropdown-item" href="#">Edit</a>
                                        <a className="dropdown-item" href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#active-group" role="tab" aria-selected="true">ACTIVE</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#popular-group" role="tab" aria-selected="false">POPULAR</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#newest-group" role="tab" aria-selected="false">NEWEST</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="active-group" role="tabpanel">
                                    <div className="group-list">
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/groups/groups_9.jpg" alt="group"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Kito Development</a></h4>
                                                <div className="item-member">265 Members</div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/groups/groups_10.jpg" alt="group"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Chef Express</a></h4>
                                                <div className="item-member">4,265 Members</div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/groups/groups_11.jpg" alt="group"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Photo Contest</a></h4>
                                                <div className="item-member">1,265 Members</div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/groups/groups_12.jpg" alt="group"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">WP Developers</a></h4>
                                                <div className="item-member">265 Members</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="popular-group" role="tabpanel">
                                    <div className="group-list">
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/groups/groups_9.jpg" alt="group"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Kito Development</a></h4>
                                                <div className="item-member">265 Members</div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/groups/groups_10.jpg" alt="group"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Chef Express</a></h4>
                                                <div className="item-member">4,265 Members</div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/groups/groups_11.jpg" alt="group"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Photo Contest</a></h4>
                                                <div className="item-member">1,265 Members</div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/groups/groups_12.jpg" alt="group"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">WP Developers</a></h4>
                                                <div className="item-member">265 Members</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="newest-group" role="tabpanel">
                                    <div className="group-list">
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/groups/groups_9.jpg" alt="group"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Kito Development</a></h4>
                                                <div className="item-member">265 Members</div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/groups/groups_10.jpg" alt="group"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Chef Express</a></h4>
                                                <div className="item-member">4,265 Members</div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/groups/groups_11.jpg" alt="group"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">Photo Contest</a></h4>
                                                <div className="item-member">1,265 Members</div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="item-img">
                                                <a href="#">
                                                    <img src="media/groups/groups_12.jpg" alt="group"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="item-title"><a href="#">WP Developers</a></h4>
                                                <div className="item-member">265 Members</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="widget widget-banner">
                            <h3 className="item-title">Most Popular</h3>
                            <div className="item-subtitle">Circle Application</div>
                            <a href="#" className="item-btn">
                                <span className="btn-text">Register Now</span>
                                <span className="btn-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21px" height="10px">
                                        <path fill-rule="evenodd" d="M16.671,9.998 L12.997,9.998 L16.462,6.000 L5.000,6.000 L5.000,4.000 L16.462,4.000 L12.997,0.002 L16.671,0.002 L21.003,5.000 L16.671,9.998 ZM17.000,5.379 L17.328,5.000 L17.000,4.621 L17.000,5.379 ZM-0.000,4.000 L3.000,4.000 L3.000,6.000 L-0.000,6.000 L-0.000,4.000 Z" />
                                    </svg>
                                </span>
                            </a>
                            <div className="item-img">
                                <img src="media/figure/widget_banner_1.png" alt="banner"/>
                            </div>
                        </div>
                        <div className="widget widget-memebers widget-activity">
                            <div className="widget-heading">
                                <h3 className="widget-title">Friends Activity</h3>
                                <div className="dropdown">
                                    <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                        ...
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">Close</a>
                                        <a className="dropdown-item" href="#">Edit</a>
                                        <a className="dropdown-item" href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                            <div className="activity-list">
                                <div className="media">
                                    <div className="item-img">
                                        <a href="#">
                                            <img src="media/figure/chat_10.jpg" alt="Chat"/>
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="item-title">
                                            <a href="#" className="author-name">Aahat Akter</a>
                                            commented on Destroy Dex's
                                            <a href="#" className="activity-link">Photo</a>
                                        </h4>
                                        <div className="activity-time">20 minutes ago</div>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="item-img">
                                        <a href="#">
                                            <img src="media/figure/chat_8.jpg" alt="Chat"/>
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="item-title">
                                            <a href="#" className="author-name">Neko Bebop</a>
                                            liked Marina
                                            <a href="#" className="activity-link">Status</a>
                                        </h4>
                                        <div className="activity-time">15 minutes ago</div>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="item-img">
                                        <a href="#">
                                            <img src="media/figure/chat_1.jpg" alt="Chat"/>
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="item-title">
                                            <a href="#" className="author-name">Neko Bebop</a>
                                            commented on Destroy Dex's
                                            <a href="#" className="activity-link">Photo</a>
                                        </h4>
                                        <div className="activity-time">20 minutes ago</div>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="item-img">
                                        <a href="#">
                                            <img src="media/figure/chat_6.jpg" alt="Chat"/>
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="item-title">
                                            <a href="#" className="author-name">Neko Bebop</a>
                                            commented on Destroy Dex's
                                            <a href="#" className="activity-link">Photo</a>
                                        </h4>
                                        <div className="activity-time">20 minutes ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
            
  
  </>




  )
}

export default Home_Wget