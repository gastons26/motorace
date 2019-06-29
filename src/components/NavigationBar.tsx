import * as React from "react";
import { Link } from "react-router-dom";

export class NavigationBar extends React.Component {
    render() {
        return <nav className="navbar navbar-expand-lg navigation fixed-top fixed-nav" id="navbar">
            <div className="container-fluid">
                <Link to="/">
                    <h2 className="text-white text-capitalize">Moto<span className="text-color">trase</span></h2>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsid"
                        aria-controls="navbarsid" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="ti-view-list" />
                </button>

                <div className="collapse text-center navbar-collapse" id="navbarsid">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link to="/history" className="nav-link">Vēsture</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/training-rides" className="nav-link">Treniņbraucieni</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-link">Galerija</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/price" className="nav-link">Cenas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacts" className="nav-link">Kontakti</Link>
                        </li>
                    </ul>

                    <div className="my-md-0 ml-lg-4 mt-4 mt-lg-0 ml-auto text-lg-right mb-3 mb-lg-0">
                        <a href="tel:+23-345-67890"><h3 className="text-color mb-0"><i className="ti-mobile mr-2" />+371
                            26514524</h3></a>
                    </div>
                </div>
            </div>
        </nav>
    }
}