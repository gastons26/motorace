import './styles/Contacts.scss';

import * as React from "react";
import {FormEvent} from "react";
import {ContactStore} from "../stores/Contact.store";
import {Spinner} from "./Spinner";

interface IState {
    submitErrMessage: string;
    submitSuccessMessage: string;
    isLoading: boolean;
}

export class Contacts extends React.Component<{}, IState> {
    private _contactStore = new ContactStore();

    constructor(props: any) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            submitErrMessage: '',
            submitSuccessMessage: '',
            isLoading: false
        }
    }

    componentDidMount(): void {
        const myLatLng = { lat: 57.903702, lng: 25.3615862 };

        setTimeout(() => {
            const map = new google.maps.Map(document.getElementById('map'), {
                center: myLatLng,
                zoom: 11,
            });

            new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Mototrase "Eriņi"'
            });
        }, 750);
    }

    async handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const userName = (document.getElementById("userName") as any).value;
        const userMail = (document.getElementById("userMail") as any).value;
        const userMessage = (document.getElementById("userMessage") as any).value;

        if(this.isValidData(userName, userMail, userMessage)) {
            try {

                this.setState({
                    isLoading: true
                });

                await this._contactStore.postContact({
                    name: userName,
                    email: userMail,
                    subject: userMessage
                });

                (document.getElementById("userName") as any).value = '';
                (document.getElementById("userMail") as any).value = '';
                (document.getElementById("userMessage") as any).value = '';

                this.setState({
                    submitSuccessMessage: "Jūsu jautājums veiksmīgi nosūtīts"
                })
            } catch (e) {
                this.setState({
                    submitErrMessage: e.message
                })
            } finally {
                this.setState({
                    isLoading: false
                });
            }
        }
    }

    render() {
        return <>
            <div className="main-wrapper" id="contact__page">
                <section className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <div className="section-title">
                                    <div className="divider mb-3" />
                                    <h2>Kontakti</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <div id="map" />
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <div>"Lejeriņi", Ķoņu pag., Naukšēnu nov., LV-4240</div>
                                <div>(+371) 26 514 524 </div>
                                <div>Epasts: <a href="mailto:fuksko@inbox.lv">fuksko@inbox.lv</a></div>

                                <form id="contact-form" onSubmit={this.handleSubmit}>
                                    <div className="form-row">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <input id="userName" name="user_name" type="text" className="form-control"
                                                       placeholder="Jūsu vārds" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <input id="userMail" name="user_email" type="text" className="form-control"
                                                       placeholder="E-pasts" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group-2">
                                                <textarea
                                                    id="userMessage"
                                                    name="user_message" className="form-control" rows={4}
                                                    placeholder="Jūsu ziņojums" />
                                            </div>

                                            <div className="text-center">
                                                <Spinner isLoading={this.state.isLoading}>
                                                    <button className="btn btn-main mt-3 " type="submit">Sazināties ar mums</button>
                                                </Spinner>
                                            </div>
                                        </div>
                                    </div>
                                    { this.showValidationMessage() }
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>;
    }

    private showValidationMessage(): React.ReactFragment  {
        const { submitErrMessage, submitSuccessMessage } = this.state;

        if(submitSuccessMessage) {
            return <div className="alert alert-success" role="alert">
                {submitSuccessMessage}
            </div>;
        }

        if(submitErrMessage) {
            return <div className="alert alert-danger" role="alert">
                {submitErrMessage}
            </div>;
        }
        return <></>;
    };

    private isValidData(userName: string, userMail: string, userMessage: string): boolean {
        if(!userName || userName.trim() === '' ||
            !userMail || userMail.trim() === '' ||
            !userMessage || userMessage.trim() === ''
        ) {
            this.setState({
                submitErrMessage: "Lūdzu aizpildiet visus laukus",
                submitSuccessMessage: ''
            });
            return false;
        }

        if(!Contacts.validateEmail(userMail)) {
            this.setState({
                submitErrMessage: "Norādītais e-pasts nav korekts"
            });
            return false;
        }
        return true;
    }

    private static validateEmail(email: string): boolean {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

}