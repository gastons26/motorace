import './styles/History.scss';

import * as React from "react";
import {InterviewStore} from "../stores/Interview.store";
import {InterviewModel} from "../stores/models/InterviewModel";
import {Spinner} from "./Spinner";

interface IState {
    error: string;
    isLoading: boolean;
    items: InterviewModel[];
    activeItem: InterviewModel | false;
}

export class History extends React.Component<{}, IState> {
    private readonly _interviewStore: InterviewStore;

    constructor(props: any) {
        super(props);

        this._interviewStore = new InterviewStore();

        this.state = {
            error: null,
            isLoading: false,
            items: [],
            activeItem: null
        };
    }

    async componentDidMount(): Promise<void> {
        this.setState({
            isLoading: true
        })
        const items = await this._interviewStore.getInterviews();

        this.setState({
            items,
            isLoading: false
        })
    }

    selectInterview(item: InterviewModel | false): void {
        window.scrollTo({ top: 0 } );
        this.setState({
            activeItem: item
        });
    }

    render() {
        const {activeItem, items} = this.state;
        if(activeItem) {
            return this.renderActiveItem(activeItem);
        }
        return (
            <>
                <div className="main-wrapper">
                    <section className="section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <div className="section-title">
                                        <div className="divider mb-3"></div>
                                        <h2>Vēsture</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12">
                                    <p>Mototrase "Eriņi" darbību uzsāka 1985.gadā Valmieras rajona kolhoza "Cīņa" paspārnē un darbojās līdz 1990.gadam.
                                        Tad trasi pārņem sporta firma "Eriņi".</p>
                                    <p>1996.gadā tiek atsākta motokrosu rīkošana amatieriem, kuriem pateicoties 2000.gadā aizsākās LaMSF kausa izcīņa motokrosā "B" līgā un kļuva populāra visā Latvijā.
                                        Mototrases īpašnieks 2003.gadā uzsāk vākt datus par motosporta vēsturi Rūjienas novadā.</p>
                                    <p>Tiek veidota ekspozīcija un intervēti motosportisti, kuru sporta karjera ir saistīta ar Rūjienas novadu.</p>
                                    <Spinner isLoading={this.state.isLoading}>
                                        <div className="row history">

                                                {items.map((interview: InterviewModel) => (
                                                    <div key={interview.id} className="col-lg-3 col-md-6">
                                                        <div className="card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm hover-style-1"
                                                             onClick={() => this.selectInterview(interview)}
                                                        >
                                                            <div className="card-body">
                                                                <h4 className="font-secondary mb-0">{interview.fullname}</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </Spinner>

                                    <p>
                                        Motosportistus intervēja Inta Lapsiņa <br />
                                        Intervijām nav nobeigumu. Lai uzzinātu interviju turpinājumus, Jums jābrauc uz mototrasi "Eriņi", kur Jūs uzzināsiet vēl interesantus vēstures faktus par motokrosu.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }

    private renderActiveItem(activeItem: InterviewModel) {
        return <>
            <div className="main-wrapper">
                <section className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <div className="section-title">
                                    <div className="divider mb-3"></div>
                                    <h2>{activeItem.fullname}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 history__active-item">
                                <a href="#" onClick={() => this.selectInterview(false)}>
                                    <i className="ti-angle-double-left mr-2" />
                                    Atpakaļ
                                </a>
                                <p><b>{activeItem.introduction}</b></p>
                                <p dangerouslySetInnerHTML={{__html: activeItem.description}}></p>

                                {activeItem.questions.map(question => (
                                        <div key={question.id}>
                                            <p>
                                                <b>{question.question}</b><br />
                                                <span dangerouslySetInnerHTML={{__html: question.answer}}></span>
                                            </p>
                                        </div>
                                ))}

                                <a href="#" onClick={() => this.selectInterview(false)}>
                                    <i className="ti-angle-double-left mr-2" />
                                    Atpakaļ
                                </a>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    }
}