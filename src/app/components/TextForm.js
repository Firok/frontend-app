/**
 * Created by batefirok on 11/28/2017.
 */
import React, {Component} from 'react';

export class TextForm extends Component {

    handleAddText(text) {
        this.props.addText(text);
    }

    render() {

        return (
            <div className="text">
                <h4>{this.props.text}</h4>
                <button id="addText" className="btn btn-default" onClick={this.handleAddText.bind(this,this.props.text)}>Add Text</button>
            </div>
        );
    }

}
