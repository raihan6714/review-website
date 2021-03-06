import React from 'react';
import { Link } from 'react-router-dom';

const AllCourses = (props) => {
    const { titleImg, name, enroll, title, duration, lectures, forWhom, trainerImg, trainerName, courseFees } = props.service;
    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="crs_grid">
                <div className="crs_grid_thumb">
                    <Link to="/details" className="crs_detail_link">
                        <img src={titleImg} className="img-fluid rounded" alt="" />
                    </Link>
                    <div className="crs_video_ico">
                        <i className="fa fa-play"></i>
                    </div>
                    <div className="crs_locked_ico">
                        <i className="fa fa-lock"></i>
                    </div>
                </div>
                <div className="crs_grid_caption">
                    <div className="crs_flex">
                        <div className="crs_fl_first">
                            <div className="crs_cates cl_8"><span>{name}</span></div>
                        </div>
                        <div className="crs_fl_last">
                            <div className="crs_inrolled"><strong>{enroll} </strong> Enrolled</div>
                        </div>
                    </div>
                    <div className="crs_title">
                        <h4>
                            <Link to="/details" className="crs_title_link">{title}</Link>
                        </h4>
                    </div>
                    <div className="crs_info_detail">
                        <ul>
                            <li><i className="fa fa-clock text-danger"></i><span>{duration}</span></li>
                            <li><i className="fa fa-video text-success"></i>
                                <span>{lectures} Lectures</span></li>
                            <li><i className="fa fa-signal text-warning"></i>
                                <span> {forWhom}</span></li>
                        </ul>
                    </div>
                </div>
                <div className="crs_grid_foot">
                    <div className="crs_flex">
                        <div className="crs_fl_first">
                            <div className="crs_tutor">
                                <div className="crs_tutor_thumb">
                                    <img src={trainerImg} className="img-fluid circle" alt="" />
                                </div>
                                <div className="crs_tutor_name">
                                    <a href="instructor-detail.html"> {trainerName}</a>
                                </div>
                            </div>
                        </div>
                        <div className="crs_fl_last">
                            <div className="crs_price"><h2><span className="currency">$</span><span className="theme-cl">{courseFees}</span></h2></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;