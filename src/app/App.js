import React, {Component} from 'react';
import $ from 'jquery';
import {AddImage} from './components/AddImage';
import {TextForm} from './components/TextForm';
import {ImageList} from './components/ImageList';
import {Canvas} from './components/Canvas';
import './main.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            images: [],
            text: 'text',
            canvasChildren: []
        }
    }

    // get all images from the server
    getImages() {
        $.ajax({
            url: '/images',
            datatype: 'json',
            cache: false,
            success: function (data) {
                this.setState({images: data}, function () {
                    console.log(this.state.images);
                })
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }
        })
    }

    // update the image list after successfull uploading
    handleAddImage(image) {
        let images = this.state.images;
        console.log(image);
        images.push(image);
        this.setState({
            images: images
        });
    }

    // select an image from the list and update text to add it in the canvas
    // and directly image to canvas
    handleSelectImage(image) {

        let canvasChildren = this.state.canvasChildren;
        let canvasChild = {
            content: image,
            type: 'image'
        };
        canvasChildren.push(canvasChild);
        this.setState({
            canvasChildren: canvasChildren,
            text: image.substring(image.lastIndexOf('/') + 1)
        });

    }


    //handle add text
    handleAddText(text) {
        let canvasChildren = this.state.canvasChildren;
        let canvasChild = {
            content: text,
            type: 'text'
        };
        canvasChildren.push(canvasChild);
        this.setState({
            canvasChildren: canvasChildren
        });
        console.log(this.state.canvasChildren);
    }

    // handle remove text to canvas
    handleRemoveText(key) {
        let canvasChildren = this.state.canvasChildren;
        canvasChildren.splice(key,1);
        this.setState({
            canvasChildren: canvasChildren,
        });

    }

    // handle remove image to canvas
    handleRemoveImage(key) {
        let canvasChildren = this.state.canvasChildren;
        canvasChildren.splice(key,1);
        this.setState({
            canvasChildren: canvasChildren,
        });

    }

    componentWillMount() {
        this.getImages();
    }

    componentDidMount() {
        this.getImages();
    }

    render() {
        return (
            <div className="App">
                {/* side pane*/}
                <div className="sidepane col-sm-2 col-md-2 col-lg-2">
                    {/*insert ImageForm component */}
                    <AddImage addImage={this.handleAddImage.bind(this)}/>

                    <hr />
                    <div className="assets">
                        <h3>Assets</h3>
                        {/*insert TextForm component */}
                        <TextForm text={this.state.text} addText={this.handleAddText.bind(this)}/>
                        {/* insert ImageList component */}
                        <ImageList onSelect={this.handleSelectImage.bind(this)} images={this.state.images}/>
                    </div>
                </div>
                {/* insert canvas*/}
                <Canvas canvasChildren={this.state.canvasChildren} onRemoveText={this.handleRemoveText.bind(this)} onRemoveImage={this.handleRemoveImage.bind(this)}/>
            </div>
        );
    }
}

export default App;
