import './styles/Home.scss';

import * as React from "react";
import {ReactNode} from "react";
import {Link} from "react-router-dom";


export class Home extends React.Component {
    async componentDidMount() {

        document.getElementById("navbar").classList.add('nav-transparent');

        (window as any).$('.testimonial-slider').slick({
            slidesToShow: 1,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
            dots:true
        });
    };

    componentWillUnmount(): void {
        document.getElementById("navbar").classList.remove('nav-transparent');
    }

    render(): ReactNode {
        return <div className="main-wrapper">
            <section className="slider home__slider">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 home__top-title">
                            <span className="h6 d-inline-block mb-4 subhead text-uppercase">Mototrase Eriņi</span>
                            <h1 className="text-uppercase text-white mb-5">Motokross  - <span className="text-color">adrenalīna</span>, <span className="text-color">ātruma</span> un  <span className="text-color">brīvības</span> izjūta
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-80px">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-4 col-md-6">
                            <div className="card p-5 border-0 rounded-top border-bottom position-relative hover-style-1">
                                <span className="number">01</span>
                                <h3 className="mt-3">Vēsture</h3>
                                <p className="mt-3 mb-4">Mototrase "Eriņi" darbību uzsāka 1985.gadā Valmieras rajona kolhoza "Cīņa" paspārnē un darbojās līdz 1990.gadam.</p>
                                <Link to="/history" className="text-color text-uppercase font-size-13 letter-spacing font-weight-bold"><i className="ti-minus mr-2" />Skatīt vairāk</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card p-5 border-0 rounded-top hover-style-1">
                                <span className="number">02</span>
                                <h3 className="mt-3">Izklaide</h3>
                                <p className="mt-3 mb-4">Lieliska vieta, kur ir apvienota vēsture ar mūsdienīgām atpūtas iespējām. Būs interesanti ikvienam!</p>
                                <Link to="/price" className="text-color text-uppercase font-size-13 letter-spacing font-weight-bold"><i className="ti-minus mr-2" />Skatīt vairāk</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card p-5 border-0 rounded-top hover-style-1">
                                <span className="number">03</span>
                                <h3 className="mt-3">Treniņbraucieni</h3>
                                <p className="mt-3 mb-4">Mototrasē „Eriņi” piedāvājam treniņu sacensības komandām un individuālu apmācību iesācējiem</p>
                                <Link to="/training-rides" className="text-color text-uppercase font-size-13 letter-spacing font-weight-bold"><i className="ti-minus mr-2" />Skatīt vairāk</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home__textimonial textimonial position-relative bg-3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 text-center">
                                    <div>
                                        <div className="divider mb-2"></div>
                                        <h2 className="text-white">Ko cilvēki saka?</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonial-slider">
                                <div className="text-center">
                                    <h3 className="mt-4 text-white letter-spacing">Jūrmalas Delveri</h3>
                                    <p className="my-4 text-white-50">
                                        Paldies par lieliski pavadītajām brīvdienām <br />
                                        Eriņu mototrasē! Īpašs paldies trases saimniekam Guntim Lapsiņam par sniegto atbalstu mocīšu remontā. <br />
                                        Trasei ir stingrs segums, lieliski tramplīni, kas forši un droši uzmet līdz ar to iesācējiem braukšana ir īpaši patīkama un droša. Trases malā ir dīķis kurā var nopeldēties. <br />
                                        P.S. Visi uz trasi!
                                    </p>
                                </div>
                                <div className="text-center">
                                    <h3 className="mt-4 text-white letter-spacing">i.moto</h3>
                                    <p className="my-4 text-white-50">
                                        Trase ļoti laba. Kompakta un arī ātra,lieliska skatītājiem.Tramplīni patika.Iesācējiem piemērota un arī pro.Paldies!!
                                    </p>
                                </div>

                                <div className="text-center">
                                    <h3 className="mt-4 text-white letter-spacing">juriz</h3>
                                    <p className="my-4 text-white-50">
                                        Lielisks pasākums bija vasaras vidū pie jums! varētu tomēr rīkot tādus pasāskumus katru gadu, vienkārši lai motosportistiem, amatieriem, motociklistiem, un pārējiem entuziastiem ar savu tehniku būtu kur tikties un sabraukt! ceru ka līdzīgi pasākumi vēl būs :)
                                    </p>
                                </div>

                                <div className="text-center">
                                    <h3 className="mt-4 text-white letter-spacing">juriz</h3>
                                    <p className="my-4 text-white-50">
                                        Lielisks pasākums bija vasaras vidū pie jums! varētu tomēr rīkot tādus pasāskumus katru gadu, vienkārši lai motosportistiem, amatieriem, motociklistiem, un pārējiem entuziastiem ar savu tehniku būtu kur tikties un sabraukt! ceru ka līdzīgi pasākumi vēl būs :)
                                    </p>
                                </div>

                                <div className="text-center">
                                    <h3 className="mt-4 text-white letter-spacing">Aiva Grīslīte</h3>
                                    <p className="my-4 text-white-50">
                                        Ļoti jauki saimnieki. Paldies par jauko un atrakcijam pilno atpūtu. Un pritiņa arī super 👍
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section course bg-gray">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="section-title">
                                <div className="divider mb-3"></div>
                                <h2>Galerija</h2>
                                <p>Bildes un video kā pie mums izskatās. Gaidām Jūs visus ciemos :)</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
                                <img src="assets/images/gallery/course-1.jpg" alt="" className="img-fluid" />

                                    <div className="card-body">
                                        <a href="course-single.html"><h4 className="font-secondary mb-0">Build Body</h4></a>
                                        <p className=" mb-2">Mentor: Jimmy Karter</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
                                <img src="assets/images/gallery/course-2.jpg" alt="" className="img-fluid" />

                                    <div className="card-body">
                                        <a href="course-single.html"><h4 className="font-secondary mb-0">Build Body</h4></a>
                                        <p className="mb-2">Mentor: Jimmy Karter</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
                                <img src="assets/images/gallery/course-3.jpg" alt="" className="img-fluid" />

                                    <div className="card-body">
                                        <a href="course-single.html"><h4 className="font-secondary mb-0">Build Body</h4></a>
                                        <p className="mb-2">Mentor: Jimmy Karter</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
                                <img src="assets/images/gallery/course-2.jpg" alt="" className="img-fluid" />

                                    <div className="card-body">
                                        <a href="course-single.html"><h4 className="font-secondary mb-0">Build Body</h4></a>
                                        <p className=" mb-2">Mentor: Jimmy Karter</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    }
}
