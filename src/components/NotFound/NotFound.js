import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
    return (
        <div>
            <section className="error-wrap">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-lg-6 col-md-10">
                            <div className="text-center">
                                <img src="https://themezhub.net/skillup-demo/assets/img/404.png" className="img-fluid" alt="" />
                                <p>Maecenas quis consequat libero, a feugiat eros.Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper</p>
                                <Link className="btn theme-bg text-white btn-md" to="/home">Back To Home</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;