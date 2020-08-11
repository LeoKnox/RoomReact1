import React, { Component } from 'react';
import axios from 'axios';

export class Create extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeFloor = this.onChangeFloor.bind(this);
        this.onChangeWall = this.onChangeWall.bind(this);
        this.onChangeWidth = this.onChangeWidth.bind(this);
        this.onChangeLength = this.onChangeLength.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            floor: '',
            wall: '',
            width: null,
            length: 3
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeFloor(e) {
        this.setState({
            floor: e.target.value
        });
    }

    onChangeWall(e) {
        this.setState({
            wall: e.target.value
        });
    }

    onChangeWidth(e) {
        this.setState({
            width: parseInt(e.target.value)
        });
    }

    onChangeLength(e) {
        this.setState({
            length: parseInt(e.target.value)
        });
    }

    onChangeDateCreated(e) {
        this.setState({
            dateCreated: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const {history} = this.props;

        let roomObject = {
            Id: Math.floor(Math.random() * 1000),
            name: this.state.name,
            floor: this.state.floor,
            wall: this.state.wall,
            width: this.state.width,
            length: this.state.length
        }

        console.log("******" + roomObject.width);

        axios.post("api/Room/AddRoom", roomObject).then(result => {
            history.push('/rooms');
        })
    }

    render() {
        return (
            <div className="room-form">
                <h3>Add New Room</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Room Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Floor Texture</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.floor}
                            onChange={this.onChangeFloor}
                        />
                    </div>
                    <div className="form-group">
                        <label>Wall Texture</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.wall}
                            onChange={this.onChangeWall}
                        />
                    </div>
                    <div className="col col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <label>Width</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.width}
                                onChange={this.onChangeWidth}
                            />
                        </div>
                    </div>
                    <div className="col col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <label>Length</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.length}
                                onChange={this.onChangeLength}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Room" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         )
    }
}