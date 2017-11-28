/**
 * Created by batefirok on 11/28/2017.
 */
import React, {Component} from 'react';
import {Text} from "./Text";
import {Image} from "./Image";

export class Canvas extends Component {

    //remove Text from canvas
    removeText(key) {
        this.props.onRemoveText(key);
    }

    //remove image from canvas
    removeImage(key) {
        this.props.onRemoveImage(key);
    }

    render() {

        let canvasChildren;
        if(this.props.canvasChildren){
            canvasChildren = this.props.canvasChildren.map((child, i) => {
                return (
                    (child.type === 'text') ?  <Text key={i} text={child.content} onRemoveText={this.removeText.bind(this,i)}/>:<Image key={i} image={child.content} onRemoveImage={this.removeImage.bind(this,i)}/>
                )
            })
        }

        return (
            <div className="canvas col-sm-8 col-md-8 col-lg-8">
                <div className="block">
                     {/*Add images and texts to here */}
                    {canvasChildren}
                </div>
            </div>
        );
    }

}
