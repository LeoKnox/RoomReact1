import React, { Component } from 'react';
import axios from 'axios';

export class Delete extends Component {
    constructor(props) {
        super(props);

        this.onCancel = this.onCancel.bind(this);
        this.onConfirmation = this.onConfirmation.bind(this);

        this.state = {
            name: "",
            wall: "",
            floor: "",
            width: null,
            length: null,
            dateCreated: null,
            dateModified: null
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

    onCancel(e) {
        const {history} = this.props;
        history.push('/rooms');
    }

    onConfirmation(e) {
        const {id} = this.props.match.params;
        const {history} = this.props;

        axios.delete("api/Room/DeleteRoom/" + id).then(result => {
            history.push('/rooms');
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }} >
            <h2>Delete Room</h2>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title"> {this.state.name}</h4>
                    <p className="card-text"> {this.state.floor}</p>
                        <button onClick={this.onCancel} className="btn btn-defualt">
                        Cancel
                        </button>
                        <button onClick={this.onConfirmation} className="btn btn-danger">
                        Delete
                        </button>
                </div>
            </div>
            </div>
        )
    }
}