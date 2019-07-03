import * as React from "react";
import {GalleryList} from "./GalleryList";

export class Gallery extends React.Component {
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
                                        <h2>Galerija</h2>
                                    </div>
                                </div>
                            </div>
                            <GalleryList />
                        </div>
                    </section>
                </div>
            </>
        );
    }
}