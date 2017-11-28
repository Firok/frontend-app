/**
 * Created by batefirok on 11/28/2017.
 */
import React, {Component} from 'react';
import {ImageItem} from './ImageItem';

export class ImageList extends Component {

    selectImage(image){
        this.props.onSelect(image);
    }

    render() {
        let imageItems;
        if(this.props.images){
            imageItems = this.props.images.map((image, i) => {
                return (
                    <ImageItem onSelect={this.selectImage.bind(this)} key={i} image={image}/>
                )
            })
        }
        return (
            <div className="image">
                <h4>Images</h4>
                <ul className="list-unstyled">
                    {imageItems};
                </ul>
            </div>
        );
    }

}


