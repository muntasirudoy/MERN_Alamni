import React from 'react'


const Right_Sidebar = ({Children}) => {
  return (
<div class="wrapper">
 <div className="fixed-sidebar right">
            <div className="fixed-sidebar-right small-sidebar">
                <div className="sidebar-toggle" id="chat-head-toggle">
                    <button className="chat-icon">
                        <i className="icofont-speech-comments"></i>
                    </button>
                </div>
                <div className="sidebar-menu-wrap">
                    <div className="mCustomScrollbar" data-mcs-theme="dark" data-mcs-axis="y">
                        <ul className="user-chat-list">
                            <li className="chat-item chat-open">
                                <div className="author-img">
                                    <img src="media/figure/chat_1.jpg" alt="chat"/>
                                    <span className="chat-status offline"></span>
                                </div>
                            </li>
                            <li className="chat-item chat-open">
                                <div className="author-img">
                                    <img src="media/figure/chat_2.jpg" alt="chat"/>
                                    <span className="chat-status offline"></span>
                                </div>
                            </li>
                            <li className="chat-item chat-open">
                                <div className="author-img">
                                    <img src="media/figure/chat_3.jpg" alt="chat"/>
                                    <span className="chat-status offline"></span>
                                </div>
                            </li>
                            <li className="chat-item chat-open">
                                <div className="author-img">
                                    <img src="media/figure/chat_4.jpg" alt="chat"/>
                                    <span className="chat-status online"></span>
                                </div>
                            </li>
                            <li className="chat-item chat-open">
                                <div className="author-img">
                                    <img src="media/figure/chat_5.jpg" alt="chat"/>
                                    <span className="chat-status online"></span>
                                </div>
                            </li>
                            <li className="chat-item chat-open">
                                <div className="author-img">
                                    <img src="media/figure/chat_6.jpg" alt="chat"/>
                                    <span className="chat-status online"></span>
                                </div>
                            </li>
                            <li className="chat-item chat-open">
                                <div className="author-img">
                                    <img src="media/figure/chat_7.jpg" alt="chat"/>
                                    <span className="chat-status offline"></span>
                                </div>
                            </li>
                            <li className="chat-item chat-open">
                                <div className="author-img">
                                    <img src="media/figure/chat_8.jpg" alt="chat"/>
                                    <span className="chat-status offline"></span>
                                </div>
                            </li>
                            <li className="chat-item chat-open">
                                <div className="author-img">
                                    <img src="media/figure/chat_9.jpg" alt="chat"/>
                                    <span className="chat-status offline"></span>
                                </div>
                            </li>
                            <li className="chat-item chat-open">
                                <div className="author-img">
                                    <img src="media/figure/chat_10.jpg" alt="chat"/>
                                    <span className="chat-status offline"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Right_Sidebar