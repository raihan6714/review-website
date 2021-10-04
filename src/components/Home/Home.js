import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';
import './Home.css';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./cources.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>
            <div className="hero_banner image-cover image_bottom h2_bg ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="simple-search-wrap text-left">
                                <div className="hero_search-2">
                                    <div className="elsio_tag">LISTEN TO OUR NEW ANTHEM</div>
                                    <h1 className="banner_title mb-4">Find the most exciting online cources</h1>
                                    <p className="font-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search Your Cources" />
                                        <div className="">
                                            <button className="btn btn-success" type="button">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="side_block">
                                <img src="https://themezhub.net/skillup-demo/assets/img/side-1.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8">
                        <div className="sec-heading center">
                            <h2>explore Featured <span className="theme-cl">Cources</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    {/* Single Grid  */}
                    {
                        courses.map(course => <Course
                            key={course.keys}
                            course={course}
                        ></Course>)
                    }
                </div>


                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8 mt-2">
                        <div className="text-center">
                            <Link to="/services" className="btn btn-md theme-bg-light theme-cl">Explore More Cources</Link>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default Home;