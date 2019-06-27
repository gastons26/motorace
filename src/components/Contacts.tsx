import * as React from "react";

export class Contacts extends React.Component {
    render() {
        return <>
            <div className="main-wrapper">
                <section className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <div className="section-title">
                                    <div className="divider mb-3"></div>
                                    <h2>Kontakti</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row no-gutters">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="text-center  px-4 py-5 hover-style-1">
                                    <i className="icofont-gym-alt-2 text-lg text-color"></i>
                                    <h4 className="mt-3 mb-4 text-uppercase">WEIGHT LIFTING</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="text-center  px-4 py-5 hover-style-1">
                                    <i className="icofont-cycling-alt text-lg text-color"></i>
                                    <h4 className="mt-3 mb-4 text-uppercase">Cycling</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="text-center  px-4 py-5 hover-style-1">
                                    <i className="icofont-gym-alt-3 text-lg text-color"></i>
                                    <h4 className="mt-3 mb-4 text-uppercase">YOGA MEDIDATION</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="text-center  px-4 py-5 hover-style-1">
                                    <i className="icofont-muscle text-lg text-color"></i>
                                    <h4 className="mt-3 mb-4 text-uppercase">Building body</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="text-center  px-4 py-5 hover-style-1">
                                    <i className="icofont-dumbbell text-lg text-color"></i>
                                    <h4 className="mt-3 mb-4 text-uppercase">Fitness Track</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="text-center  px-4 py-5 hover-style-1">
                                    <i className="icofont-gym text-lg text-color"></i>
                                    <h4 className="mt-3 mb-4 text-uppercase">Fitness</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>;
    }
}