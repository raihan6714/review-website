import React, { useEffect, useState } from 'react';
import AllCourses from '../AllCourses/AllCourses';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./cources.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <>
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8">
                        <div className="sec-heading center">
                            <h2>Crack UPSC CSE - GS With World's<span className="theme-cl"> Largest Learning Platform</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    {/* Single Grid  */}
                    {
                        services.map(service => <AllCourses
                            key={service.keys}
                            service={service}
                        >
                        </AllCourses>)
                    }
                </div>
            </div>
        </>
    );
};

export default Service;