/**
 * Created by batefirok on 11/28/2017.
 */
import React, {Component} from 'react';
import { ImageForm } from "src/app/components/AddImage";
import { TextForm } from 'TextForm';
import { ImageList } from 'ImageList';

export class SidePane extends Component {

    render() {

        return (
            <div className="sidepane col-sm-2 col-md-2 col-lg-2">
                <div className="form">
                    <h3>Form</h3>
                    {/*insert ImageForm component */}
                    <ImageForm />
                </div>
                <hr />
                <div className="assets">
                    <h3>Assets</h3>
                    {/*insert TextForm component */}
                    <TextForm />
                    {/* insert ImageList component */}
                    <ImageList />
                </div>
            </div>
        );
    }

}
