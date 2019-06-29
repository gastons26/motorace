import * as React from "react";
import {Link} from "react-router-dom";

export class TrainingRides extends React.Component {
    render() {
        return <>
            <div className="main-wrapper">
                <section className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <div className="section-title">
                                    <div className="divider mb-3"></div>
                                    <h2>Treniņbraucieni</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row no-gutters">
                            <div className="col-lg-12">
                                Mototrasē „Eriņi” piedāvājam:
                                <ol>
                                    <li>treniņu sacensības komandām un individuāli</li>
                                    <li>
                                        individuāli treniņi motokrosa iesācējiem
                                        <ul>
                                            <li>dažādi mototrases elementi no starta līdz finišam</li>
                                            <li>labāko apļa laika noteikšana</li>
                                            <li>iepriekš saskaņojot, iespējamas instruktora konsultācijas</li>
                                        </ul>
                                    </li>
                                </ol>

                                <p>
                                    <a href="/assets/pdf/Mototrases_ekspluatacija.pdf" target="_blank">Mototrases „Eriņi” ekspluatācijas noteikumi</a>
                                    <br />
                                    <a href="/assets/pdf/ERINI_lietosanas_noteikumi.pdf" target="_blank">Mototrases „Eriņi”Izmantošanas atbildība.</a>
                                </p>

                                <p>
                                    Treniņi obligāti jāsaskaņo ar trases pilnvaroto pārvaldnieku Gunti Lapsiņu.&nbsp;
                                    <Link to="/contacts">Kontakti</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>;
    }
}