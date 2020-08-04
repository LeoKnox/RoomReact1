import React, { Component } from 'react';

export class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            floor: '',
            wall: '',
            width: null,
            length: null,
            dateCreated: null,
            dateUpdated: null
        }
    }

    render() {
        return (
            <div className="trip-form">
                <h3>Add New Room</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Room Name</label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Floor Texture</label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Wall Texture</label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <label>Width</label>
                            <input
                                type="number"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <label>Width</label>
                            <input
                                type="number"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Date Created</label>
                        <input
                            type="date"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Room" className="btn" />
                    </div>
                </form>
            </div>
         )
    }
}