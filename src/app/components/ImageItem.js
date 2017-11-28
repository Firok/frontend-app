/**
 * Created by batefirok on 11/28/2017.
 */
import React, {Component} from 'react';

export class ImageItem extends Component {

    selectImage(image){
      this.props.onSelect(image);
    }

    render() {
        return (
            <li>
                <a onClick={this.selectImage.bind(this,this.props.image)}>
                <img src={this.props.image} className="img-rounded"/>
                </a>
            </li>
        );
    }

}
