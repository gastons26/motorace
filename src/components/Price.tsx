import * as React from "react";
import {PriceStore} from "../stores/Price.store";
import {PriceModel} from "../stores/models/PriceModel";
import {Spinner} from "./Spinner";

interface IState {
    error: any;
    isLoading: boolean;
    items: PriceModel[];
}

export class Price extends React.Component<any, IState> {
    private readonly _priceStore: PriceStore;

    constructor(props: any) {
        super(props);

        this._priceStore = new PriceStore();

        this.state = {
            error: null,
            isLoading: true,
            items: []
        };
    }

    async componentDidMount(): Promise<void> {
        const items = await this._priceStore.getPrices();

        this.setState({
            isLoading: false,
            items: items
        })
    }

    render(): React.ReactFragment {
        return (
            <>
                <div className="main-wrapper">
                    <section className="section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <div className="section-title">
                                        <div className="divider mb-3"></div>
                                        <h2>Cenas</h2>
                                    </div>
                                </div>
                            </div>
                            <Spinner isLoading={this.state.isLoading}>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="table-responsive">
                                            <table className="table table-bordered">
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Objekts</th>
                                                    <th>Apraksts</th>
                                                    <th>Cena</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.items.map(((value, index) => (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>{value.object}</td>
                                                            <td>{value.description}</td>
                                                            <td>{value.priceInfo}</td>
                                                        </tr>
                                                    )))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </Spinner>
                            <p>
                                 * Pirms uzsākt braucienus ar krosa motociklu pa trasi, obligāti jāiepazīstas ar
                                <a href="/assets/pdf/Mototrases_ekspluatacija.pdf" target="_blank"> "Mototrases "Eriņi" ekspluatācijas noteikumi" </a>
                                un <a href="/assets/pdf/ERINI_lietosanas_noteikumi.pdf" target="_blank">"Mototrases „Eriņi”Izmantošanas atbildība"</a>. Pēc iepazīšanās ar iepriekšminētajiem noteikumiem jāparakstās reģistrācijas žurnālā.
                            </p>
                            <p>Grupas iepriekš pieteikt!!!</p>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}