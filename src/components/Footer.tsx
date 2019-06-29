import * as React from "react";
import {Link} from "react-router-dom";

export class Footer extends React.Component {
    render() {
        return <>
            <footer className="footer bg-black-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 mb-5 mb-lg-0">
                            <h2 className="text-white footer--motorace-title">Mototrase</h2>
                            <p>Mototrases īpašnieks 2003.gadā uzsāk vākt datus par motosporta vēsturi Rūjienas novadā.</p>
                            <p>Tiek veidota ekspozīcija un intervēti motosportisti, kuru sporta karjera ir saistīta ar Rūjienas novadu.</p>
                        </div>

                        <div className="col-lg-3 col-md-3 mb-5 mb-lg-0">
                            <div className="footer-widget">
                                <h4 className="mb-4 text-white letter-spacing text-uppercase">Saites</h4>
                                <ul className="list-unstyled footer-menu">
                                    <li><Link to="/history"><i className="ti-angle-double-right mr-2" />Vēsture</Link></li>
                                    <li><Link to="/price"><i className="ti-angle-double-right mr-2" />Cenas</Link></li>
                                    <li><Link to="/training-rides"><i className="ti-angle-double-right mr-2" />Treniņbraucieni</Link></li>
                                    <li><Link to="/gallery"><i className="ti-angle-double-right mr-2" />Galerija</Link></li>
                                    <li><Link to="/contacts"><i className="ti-angle-double-right mr-2" />Kontakti</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="footer-widget">
                                <h4 className="mb-4 text-white letter-spacing text-uppercase">Adrese</h4>
                                <p>"Lejeriņi", Ķoņu pag., Valmieras raj. LV-4240 </p>
                                <span className="text-white">(+371) 26 514 524 </span>
                                <a href="mailto: fuksko@inbox.lv" className="text-white">fuksko@inbox.lv</a>
                            </div>
                        </div>
                    </div>

                    <div className="row footer__signature">
                        <div className="col-lg-4">
                            <p className="text-white mt-3">Mototrase Eriņi © 2019</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>;
    }
}