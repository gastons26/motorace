import './styles/Spinner.scss';

import * as React from "react";

interface IProps {
    isLoading: boolean;
}

export class Spinner extends React.Component<IProps> {

    render() {
        if(this.props.isLoading) {
            return <>
                <div className="row spinner__container">
                    <div className="col-lg-12">
                        <div className="spinner__icon">
                        </div>
                    </div>
                </div>
            </>;
        }
        return this.props.children;
    }
}