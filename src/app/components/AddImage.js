/**
 * Created by batefirok on 11/28/2017.
 */
import React, {Component} from 'react';
import $ from 'jquery';

export class AddImage extends Component {

    constructor() {
        super();
        this.state = {
            newImage: ''
        }
    }

    uploadImage(data) {
        $.ajax({
            type: 'POST',
            url: '/uploads',
            data: data,
            processData: false,
            contentType: false,
            success: function (data, status, xhr) {
                this.setState({newImage: data}, function () {
                    this.props.addImage(this.state.newImage.file);
                })
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.refs.upload.value) {
            console.log(this.refs.upload.value);
            let data = new FormData();
            data.append('upload', this.refs.upload.files[0]);
            this.uploadImage(data);
            console.log("Submitted");
        }
        else {
            alert('Select your image');
        }

    }

    render() {

        return (
            <div className="form">
                <h3>Form</h3>
                <form onSubmit={this.handleSubmit.bind(this)} encType="multipart/form-data">
                    <input type="file" className="form-control" placeholder="Upload Your Images" ref="upload"
                           name="upload"/>
                    <button id="submit" className="btn btn-default">upload</button>
                </form>
            </div>
        );
    }

}
