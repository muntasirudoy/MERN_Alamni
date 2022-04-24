import React from 'react'

const Home_Post_Input = () => {
  return (
  
<>
                      <div className="block-box post-input-tab">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item" role="presentation" data-toggle="tooltip" data-placement="top" title="STATUS">
                                    <a className="nav-link active" data-toggle="tab" href="#post-status" role="tab" aria-selected="true"><i className="icofont-copy"></i>Status</a>
                                </li>
                                <li className="nav-item" role="presentation" data-toggle="tooltip" data-placement="top" title="MEDIA">
                                    <a className="nav-link" data-toggle="tab" href="#post-media" role="tab" aria-selected="false"><i className="icofont-image"></i>Photo/ Video Album</a>
                                </li>
                                <li className="nav-item" role="presentation" data-toggle="tooltip" data-placement="top" title="BLOG">
                                    <a className="nav-link" data-toggle="tab" href="#post-blog" role="tab" aria-selected="false"><i className="icofont-list"></i>Blog</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="post-status" role="tabpanel">
                                    <textarea name="status-input" id="status-input1" className="form-control textarea" placeholder="Share what are you thinking . . ." cols="30" rows="6"></textarea>
                                </div>
                                <div className="tab-pane fade" id="post-media" role="tabpanel">
                                    {/* <!-- <label>Media Gallery</label>
        	<a href="#" className="media-insert"><i className="icofont-upload-alt"></i>Upload</a> --> */}
                                    <textarea name="status-input" id="status-input2" className="form-control textarea" placeholder="Share what are you thinking . . ." cols="30" rows="6"></textarea>
                                </div>
                                <div className="tab-pane fade" id="post-blog" role="tabpanel">
                                    <textarea name="status-input" id="status-input3" className="form-control textarea" placeholder="Share what are you thinking . . ." cols="30" rows="6"></textarea>
                                </div>
                            </div>
                            <div className="post-footer">
                                <div className="insert-btn">
                                    <a href="#"><i className="icofont-photobucket"></i></a>
                                    <a href="#"><i className="icofont-tags"></i></a>
                                    <a href="#"><i className="icofont-location-pin"></i></a>
                                </div>
                                <div className="submit-btn">
                                    <a href="#">Post Submit</a>
                                </div>
                            </div>
                        </div>


</>


  )
}

export default Home_Post_Input