import React, { Component } from 'react';
import axios from 'axios';

export class Update extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeFloor = this.onChangeFloor.bind(this);
        this.onChangeWall = this.onChangeWall.bind(this);
        this.onChangeWidth = this.onChangeWidth.bind(this);
        this.onChangeDateCreated = this.onChangeDateCreated.bind(this);
        this.onUpdateCancel = this.onUpdateCancel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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

    componentDidMount() {
        const {id} = this.props.match.params;

        axios.get("api/Room/SingleRoom/" + id).then(room => {
            const response = room.data;

            this.setState({
                name: response.name,
                floor: response.floor,
                wall: response.wall,
                width: response.width,
                length: response.length,
                dateCreated: new Date(response.dateCreated).toISOString().slice(0,10),
                dateModified: new Date(response.dateCreated).toISOString().slice(0,10)
            })
        })
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
            width: e.target.value
        });
    }

    onChangeLenth(e) {
        this.setState({
            length: e.target.value
        });
    }

    onChangeDateCreated(e) {
        this.setState({
            dateCreated: e.target.value
        });
    }

    onUpdateCancel() {
        const {history} = this.props;
        history.push('/rooms');
    }

    onSubmit(e) {
        e.preventDefault();
        const {history} = this.props;
        const {id} = this.props.match.params;

        let roomObject = {
            name: this.state.name,
            floor: this.state.floor,
            wall: this.state.wall,
            width: parseInt(this.state.width),
            length: parseInt(this.state.length),
        }


        axios.put("api/Room/UpdateRoom/"+id, roomObject).then(result => {
            history.push('/rooms');
        })
    }

    render() {
        return (
            <div className="room-form">
                <h3>Update Room</h3>
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
                    <div>
                        <div className="col col-md-6 col-sm-6 cols-xs-12">
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
                    </div>
                    <div className="form-group">
                        <label>Date Created</label>
                        <input
                            type="date"
                            className="form-control"
                            value={this.state.dateCreated}
                            onChange={this.onChangeDateCreated}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Update</button>
                        <button onClick={this.onUpdateCancel} className="btn btn-danger">Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}