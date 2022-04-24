import React from 'react'

const Home_Search = () => {
  return (
    <>
        <div className="container">
                <div className="newsfeed-search">
                    <ul className="member-list">
                        <li className="active-member">
                            <a href="#">
                                <span className="member-icon">
                                    <i className="icofont-users"></i>
                                </span>
                                <span className="member-text">
                                    Total Members:
                                </span>
                                <span className="member-count">08</span>
                            </a>
                        </li>
                    </ul>

                    
                    <ul className="search-list">
                        <li className="search-filter">
                            <button className="drop-btn" type="button">
                                <i className="icofont-abacus-alt"></i>
                            </button>
                            <div className="drop-menu">
                                {/* <select className="select2">
                                   coulde be cng and dlt cls
                                </select> */}
                            </div>
                        </li>

                        <li className="search-input">
                            <button className="drop-btn" type="button">
                                <i className="icofont-search"></i>
                            </button>
                            {/* <div className="drop-menu">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search...."/>
                                    <div className="input-group-append">
                                        <button className="search-btn" type="button"><i className="icofont-search-1"></i></button>
                                    </div>
                                </div>
                           </div> */}
                        </li>
                    </ul>
                </div>
                </div>
    </>
  )
}

export default Home_Search