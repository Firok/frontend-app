/**
 * Created by batefirok on 11/28/2017.
 */
import React, {Component} from 'react';

export class Text extends Component {

    //remove Text from canvas
    removeText(key) {
        this.props.onRemoveText(key);
    }

    render() {

        return (
            <span>
                <a id={this.props.text} onClick={this.removeText.bind(this,this.props.key)}> {this.props.text}</a>
            </span>
        );
    }

}
