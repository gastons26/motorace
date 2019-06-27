import * as React from "react";

export class Footer extends React.Component {
    render() {
        return <>
            <footer className="footer bg-black-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                            <h2 className="text-white mb-4">Mototrase</h2>
                            <p>Mototrases īpašnieks 2003.gadā uzsāk vākt datus par motosporta vēsturi Rūjienas novadā.</p>
                            <p>Tiek veidota ekspozīcija un intervēti motosportisti, kuru sporta karjera ir saistīta ar Rūjienas novadu.</p>
                        </div>


                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                            <div className="footer-widget recent-blog">
                                <h4 className="mb-4 text-white letter-spacing text-uppercase">Lasīt</h4>
                                <div>
                                    <a href="blog-single.html"className="text-white">Jānis Serģis</a>
                                </div>
                                <div className="mt-4">
                                    <a href="blog-single.html"className="text-white">Aivars Ābols</a>
                                </div>
                                <div className="mt-4">
                                    <a href="blog-single.html"className="text-white">Brāļi Deičmaņi</a>
                                </div>
                                <div className="mt-4">
                                    <a href="blog-single.html"className="text-white">Oļģerts Tīliks</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-5 mb-5 mb-lg-0">
                            <div className="footer-widget">
                                <h4 className="mb-4 text-white letter-spacing text-uppercase">Saites</h4>
                                <ul className="list-unstyled footer-menu lh-40 mb-0">
                                    <li><a href="about.html"><i className="ti-angle-double-right mr-2"></i>Vēsture</a></li>
                                    <li><a href="service.html"><i className="ti-angle-double-right mr-2"></i>Izklaide</a></li>
                                    <li><a href="pricing.html"><i className="ti-angle-double-right mr-2"></i>Treniņbraucieni</a></li>
                                    <li><a href="course.html"><i className="ti-angle-double-right mr-2"></i>Galerija</a></li>
                                    <li><a href="contact.html"><i className="ti-angle-double-right mr-2"></i>Kontakti</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-5">
                            <div className="footer-widget">
                                <h4 className="mb-4 text-white letter-spacing text-uppercase">Adrese</h4>
                                <p>"Lejeriņi", Ķoņu pag., Valmieras raj. LV-4240 </p>
                                <span className="text-white">(+371) 26 514 524 </span>
                                <a href="mailto: fuksko@inbox.lv" className="text-white">fuksko@inbox.lv</a>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center mt-5 px-3 bg-black mx-1">
                        <div className="col-lg-4">
                            <p className="text-white mt-3">Mototrase Eriņi © 2019</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>;
    }
}