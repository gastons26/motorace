import * as React from "react";

export interface HelloProps {
    compiler: string;
    framework: string;
}

class Home extends React.Component<HelloProps, {}> {
    render() {
        return
        <div className="main-wrapper">
            <!-- Section Menu End -->

            <!-- Section Slider Start -->
            <!-- Slider Start -->
            <section className="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <span className="h6 d-inline-block mb-4 subhead text-uppercase">Mototrase Eriņi</span>
                            <h1 className="text-uppercase text-white mb-5">Motokross  - <span className="text-color">adrenalīna</span>,<br />
                                <span className="text-color">ātruma</span> un  <span className="text-color">brīvības</span>
                                <br /> izjūta
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Section Slider End -->

            <!-- Section Intro Start -->
            <section className="mt-80px">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-4 col-md-6">
                            <div className="card p-5 border-0 rounded-top border-bottom position-relative hover-style-1">
                                <span className="number">01</span>
                                <h3 className="mt-3">Vēsture</h3>
                                <p className="mt-3 mb-4">Mototrase "Eriņi" darbību uzsāka 1985.gadā Valmieras rajona kolhoza "Cīņa" paspārnē un darbojās līdz 1990.gadam.</p>
                                <a href="about.html" className="text-color text-uppercase font-size-13 letter-spacing font-weight-bold"><i className="ti-minus mr-2 "></i>Skatīt vairāk</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card p-5 border-0 rounded-top hover-style-1">
                                <span className="number">02</span>
                                <h3 className="mt-3">Izklaide</h3>
                                <p className="mt-3 mb-4">Lieliska vieta, kur ir apvienota vēsture ar mūsdienīgām atpūtas iespējām. Būs interesanti ikvienam!</p>
                                <a href="about.html" className="text-color text-uppercase font-size-13 letter-spacing font-weight-bold"><i className="ti-minus mr-2 "></i>Skatīt vairāk</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card p-5 border-0 rounded-top hover-style-1">
                                <span className="number">03</span>
                                <h3 className="mt-3">Treniņbraucieni</h3>
                                <p className="mt-3 mb-4">Mototrasē „Eriņi” piedāvājam treniņu sacensības komandām un individuālu apmācību iesācējiem</p>
                                <a href="about.html" className="text-color text-uppercase font-size-13 letter-spacing font-weight-bold"><i className="ti-minus mr-2 "></i>Skatīt vairāk</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Section Intro End -->

            <!-- Section About start -->
            <section className="section about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src="images/bg/bg-5.jpg" alt="" className="img-fluid rounded shadow w-100">
                        </div>

                        <div className="col-lg-6">
                            <div className="pl-3 mt-5 mt-lg-0">
                                <h2 className="mt-1 mb-3">We’ve skill in <br>wide <span className="text-color">range of fitness</span> and Other body health facility. </h2>

                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in.</p>

                                <a href="#" className="btn btn-main">Learn More<i className="fa fa-angle-right ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Section About End -->

            <!-- section Call To action start -->
            <section className="section cta">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className="text-center">
                                <span className="h6 letter-spacing text-white">Dscover your potential</span>
                                <h2 className="text-lg mt-4 mb-5 text-white">
                                    Book your early seat to get <span className="text-color">summer 25% </span>dicsount
                                </h2>

                                <a href="pricing.html" className="btn btn-main text-white">Join Today</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- section Call To action start -->

            <!-- Section Services Start -->
            <section className="section services ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="section-title">
                                <div className="divider mb-3"></div>
                                <h2>Our Services</h2>
                                <p>We offer more than 35 group exercis, aerobic classes each week.</p>
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
            <!-- Section Services End -->

            <!-- Section Gallery Start -->
            <section className="gallery">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="section-title">
                                <div className="divider mb-3"></div>
                                <h2>Our gallery</h2>
                                <p>We offer more than 35 group exercis, aerobic classes each week.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-0">
                    <div className="row no-gutters portfolio-gallery">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <a href="images/gallery/gallery-01.jpg" className="popup-gallery">
                                <img src="images/gallery/gallery-01.jpg" alt="" className="img-fluid">
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <a href="images/gallery/gallery-02.jpg" className="popup-gallery">
                                <img src="images/gallery/gallery-02.jpg" alt="" className="img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <a href="images/gallery/gallery-03.jpg" className="popup-gallery">
                                <img src="images/gallery/gallery-03.jpg" alt="" className="img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <a href="images/gallery/gallery-04.jpg" className="popup-gallery">
                                <img src="images/gallery/gallery-04.jpg" alt="" className="img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <a href="images/gallery/gallery-05.jpg" className="popup-gallery">
                                <img src="images/gallery/gallery-05.jpg" alt="" className="img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <a href="images/gallery/gallery-06.jpg" className="popup-gallery">
                                <img src="images/gallery/gallery-06.jpg" alt="" className="img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <a href="images/gallery/gallery-07.jpg" className="popup-gallery">
                                <img src="images/gallery/gallery-07.jpg" alt="" className="img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <a href="images/gallery/gallery-08.jpg" className="popup-gallery">
                                <img src="images/gallery/gallery-08.jpg" alt="" className="img-fluid" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section Gallery END -->

            <!-- Section Testimonial Start -->
            <section className="section textimonial position-relative bg-3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 text-center">
                                    <div className="section-title">
                                        <div className="divider mb-3"></div>
                                        <h2 className="text-white">What People say</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonial-slider">
                                <div className="text-center mb-4 ">
                                    <i className="ti-quote-left text-lg text-color"></i>
                                    <h3 className="mt-4 text-white letter-spacing">A great Start to a healthy life</h3>
                                    <p className="my-4 text-white-50">Laboriosam molestias aperiam sit corporis sunt, hic veritatis possimus optio reprehenderit, laudantium excepturi, consequatur. Assumenda hic error veniam exercitationem</p>

                                    <div>
                                        <h4 className="mb-0 text-capitalize text-white font-weight-normal">John Donas</h4>
                                        <span className="text-white-50">Manager</span>
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <i className="ti-quote-left text-lg text-color"></i>
                                    <h3 className="mt-4 text-white letter-spacing">The workout worth attending!</h3>
                                    <p className="my-4 text-white-50">Laboriosam molestias aperiam sit corporis sunt, hic veritatis possimus optio reprehenderit, laudantium excepturi, consequatur. Assumenda hic error veniam exercitationem</p>
                                    <div>
                                        <h4 className="mb-0 text-capitalize text-white font-weight-normal">Donas Jack</h4>
                                        <span className="text-white-50">Manager</span>
                                    </div>
                                </div>

                                <div className="text-center mb-4">
                                    <i className="ti-quote-left text-lg text-color"></i>
                                    <h3 className="mt-4 text-white letter-spacing">Very Professional Club and coaches</h3>
                                    <p className="my-4 text-white-50">Laboriosam molestias aperiam sit corporis sunt, hic veritatis possimus optio reprehenderit, laudantium excepturi, consequatur. Assumenda hic error veniam exercitationem</p>
                                    <div>
                                        <h4 className="mb-0 text-capitalize text-white font-weight-normal" >Mikel Hussy</h4>
                                        <span className="text-white-50">Manager</span>
                                    </div>
                                </div>

                                <div className="text-center mb-4">
                                    <i className="ti-quote-left text-lg text-color"></i>
                                    <h3 className="mt-4 text-white letter-spacing">Shape your body and healthy!</h3>
                                    <p className="my-4 text-white-50">Laboriosam molestias aperiam sit corporis sunt, hic veritatis possimus optio reprehenderit, laudantium excepturi, consequatur. Assumenda hic error veniam exercitationem</p>
                                    <div>
                                        <h4 className="mb-0 text-capitalize text-white font-weight-normal">Hiker jons</h4>
                                        <span className="text-white-50">Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Section Testimonial END -->

            <!-- Section Course Start -->
            <section className="section course bg-gray">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="section-title">
                                <div className="divider mb-3"></div>
                                <h2>Popular Courses</h2>
                                <p>We offer more than 35 group exercis, aerobic classes each week.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
                                <img src="images/gallery/course-1.jpg" alt="" className="img-fluid">

                                    <div className="card-body">
                                        <a href="course-single.html"><h4 className="font-secondary mb-0">Build Body</h4></a>
                                        <p className=" mb-2">Mentor: Jimmy Karter</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
                                <img src="images/gallery/course-2.jpg" alt="" className="img-fluid">

                                    <div className="card-body">
                                        <a href="course-single.html"><h4 className="font-secondary mb-0">Build Body</h4></a>
                                        <p className="mb-2">Mentor: Jimmy Karter</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
                                <img src="images/gallery/course-3.jpg" alt="" className="img-fluid">

                                    <div className="card-body">
                                        <a href="course-single.html"><h4 className="font-secondary mb-0">Build Body</h4></a>
                                        <p className="mb-2">Mentor: Jimmy Karter</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
                                <img src="images/gallery/course-2.jpg" alt="" className="img-fluid">

                                    <div className="card-body">
                                        <a href="course-single.html"><h4 className="font-secondary mb-0">Build Body</h4></a>
                                        <p className=" mb-2">Mentor: Jimmy Karter</p>
                                    </div>
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="mt-5 text-center">
                                <a href="course.html" className="btn btn-main">See all our Courses</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Section Course ENd -->

            <!-- Section Footer Start -->
            <!-- footer Start -->
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
                                <span className="text-white">+1 (371) 26 514 524</span>
                                <span className="text-white">fuksko@inbox.lv</span>
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
            <!-- Section Footer End -->

            <!-- Section Footer Scripts -->

        </div>;
    }
}
