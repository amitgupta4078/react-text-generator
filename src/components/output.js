import React, { Component, Fragment } from "react";
import { Clipboard } from 'react-bootstrap-icons';

class Output extends Component {
    copyText = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const str = this.props.text.reduce(reducer);
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    render() {
        return (
            <Fragment>
                <button type="button" className="btn btn-primary" onClick={this.copyText}><Clipboard /> Copy Text</button>
                <div className="row mt-3 py-5 mb-3 bg-light rounded-3 px-3">
                    {this.props.text.map((para, index) => {
                        return <p key={index}>{para}</p>
                    })}
                </div>
            </Fragment>
        );
    }
}

export default Output;
