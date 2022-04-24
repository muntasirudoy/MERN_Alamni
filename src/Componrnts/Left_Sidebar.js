import React from 'react'

const Left_Sidebar = () => {
  return (

    <div class="wrapper">
     <div className="fixed-sidebar">
            <div className="fixed-sidebar-left small-sidebar">
                <div className="sidebar-toggle">
                    <button className="toggle-btn toggler-open">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className="sidebar-menu-wrap">
                    <div className="mCustomScrollbar" data-mcs-theme="dark" data-mcs-axis="y">
                        <ul className="side-menu">
                            <li><a href="newsfeed.html" className="menu-link" data-toggle="tooltip" data-placement="right" title=" NEWSFEED"><i className="icofont-newspaper"></i></a></li>
                            <li><a href="user-timeline.html" className="menu-link" data-toggle="tooltip" data-placement="right" title="MEMBERS TIMELINE"><i className="icofont-list"></i></a></li>
                            <li><a href="user-groups.html" className="menu-link" data-toggle="tooltip" data-placement="right" title="GROUPS"><i className="icofont-users-alt-2"></i></a></li>
                            <li><a href="user-friends.html" className="menu-link" data-toggle="tooltip" data-placement="right" title="MEMBERS FRIENDS"><i className="icofont-users-alt-4"></i></a></li>
                            <li><a href="user-photo.html" className="menu-link" data-toggle="tooltip" data-placement="right" title="GALLERY"><i className="icofont-photobucket"></i></a></li>
                            <li><a href="user-video.html" className="menu-link" data-toggle="tooltip" data-placement="right" title="VIDEOS"><i className="icofont-play-alt-1"></i></a></li>
                            <li><a href="#" className="menu-link" data-toggle="tooltip" data-placement="right" title="EVENT SCHEDULE"><i className="icofont-calendar"></i></a></li>
                            <li><a href="forums-timeline.html" className="menu-link" data-toggle="tooltip" data-placement="right" title="FORUM"><i className="icofont-ui-text-chat"></i></a></li>
                            <li><a href="shop.html" className="menu-link" data-toggle="tooltip" data-placement="right" title="SHOP"><i className="icofont-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Left_Sidebar