import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="lmp_caption">
                                <span className="theme-cl">About Us</span>
                                <h2 className="mb-3">What We Do &amp; Our Aim</h2>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique</p>
                                <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                                    <div className="d-flex align-items-center">
                                        <div className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <h6 className="mb-0 ml-3">Full lifetime access</h6>
                                    </div>
                                </div>
                                <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                                    <div className="d-flex align-items-center">
                                        <div className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <h6 className="mb-0 ml-3">20+ downloadable resources</h6>
                                    </div>
                                </div>
                                <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                                    <div className="d-flex align-items-center">
                                        <div className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <h6 className="mb-0 ml-3">Certificate of completion</h6>
                                    </div>
                                </div>
                                <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                                    <div className="d-flex align-items-center">
                                        <div className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <h6 className="mb-0 ml-3">Free Trial 7 Days</h6>
                                    </div>
                                </div>
                                <div className="text-left mt-4">
                                    <Link to="/" className="btn btn-md text-light theme-bg">Enrolled Today</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                            <div className="lmp_thumb">
                                <img src="https://themezhub.net/skillup-demo/assets/img/lmp-2.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="theme-bg call_action_wrap-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="call_action_wrap">
                                <div className="call_action_wrap-head">
                                    <h3>Do You Have Questions ?</h3>
                                    <span>We'll help you to grow your career and growth.</span>
                                </div>
                                <Link to="*" className="btn btn-call_action_wrap">Contact Us Today</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </ >
    );
};

export default About;