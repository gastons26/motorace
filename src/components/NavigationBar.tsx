import * as React from "react";

export class NavigationBar extends React.Component {
    render() {
        return <nav className="navbar navbar-expand-lg navigation fixed-top" id="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">
                    <h2 className="text-white text-capitalize">Moto<span className="text-color">trase</span></h2>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsid"
                        aria-controls="navbarsid" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="ti-view-list"></span>
                </button>

                <div className="collapse text-center navbar-collapse" id="navbarsid">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"><a className="nav-link" href="service.html">Vēsture</a></li>
                        <li className="nav-item"><a className="nav-link" href="pricing.html">Izklaide</a></li>
                        <li className="nav-item"><a className="nav-link" href="pricing.html">Treniņbraucieni</a></li>
                        <li className="nav-item"><a className="nav-link" href="pricing.html">Galerija</a></li>
                        <li className="nav-item"><a className="nav-link" href="contact.html">Kontakti</a></li>
                    </ul>

                    <div className="my-md-0 ml-lg-4 mt-4 mt-lg-0 ml-auto text-lg-right mb-3 mb-lg-0">
                        <a href="tel:+23-345-67890"><h3 className="text-color mb-0"><i className="ti-mobile mr-2"></i>+371
                            26514524</h3></a>
                    </div>
                </div>
            </div>
        </nav>
    }
}