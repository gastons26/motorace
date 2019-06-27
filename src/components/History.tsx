import * as React from "react";
import {InterviewStore} from "../stores/Interview.store";

export class History extends React.Component {
    private readonly _interviewStore: InterviewStore;

    constructor(props: any) {
        super(props);

        this._interviewStore = new InterviewStore();

        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    render() {
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
                                    WILL be there history
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}