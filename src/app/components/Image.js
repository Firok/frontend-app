/**
 * Created by batefirok on 11/28/2017.
 */
import React, {Component} from 'react';

export class Image extends Component {

    //remove an image from canvas
    removeImage(key) {
        this.props.onRemoveImage(key);
    }

    render() {

        return (
            <img src={this.props.image} onClick={this.removeImage.bind(this,this.props.key)} className="img-rounded"/>
        );
    }

}
