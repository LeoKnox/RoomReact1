import React, { Component } from 'react';
import axios from 'axios';

export class Rooms extends Component
{
    constructor(props) {
        super(props);

        this.onRoomUpdate = this.onRoomUpdate.bind(this);
        this.onRoomDelete = this.onRoomDelete.bind(this);

        this.state = {
            rooms: [],
            loading: false
        }
    }

    componentDidMount() {
        this.populateRoomsData();
    }

    onRoomUpdate(id) {
        const { history } = this.props;
        history.push('/update/' + id);
    }

    onRoomDelete(id) {
        const { history } = this.props;
        history.push('/delete/' + id);
    }

    populateRoomsData() {
        axios.get("api/Room/GetAllRooms").then(result => {
            const response = result.data;
            this.setState({rooms: response, loading: false})
        })
    }

    renderAllRoomsTable(rooms) {
        console.log(rooms);
        return (
            <table className="table table-striped">
                <thead>
                    <th>Name</th>
                    <th>Floor</th>
                    <th>Wall</th>
                    <th>Width</th>
                    <th>Height</th>
                    <th>Created</th>
                    <th>Modified</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        rooms.map(room => (
                            <tr key={room.Id}>
                                <td>{room.name}</td>
                                <td>{room.floor}</td>
                                <td>{room.wall}</td>
                                <td>{room.width}</td>
                                <td>{room.length}</td>
                                <td>{new Date(room.dateCreated).toLocaleDateString()}</td>
                                <td>{new Date(room.dateModified).toLocaleDateString()}</td>
                                <td>
                                    <div className="form-group">
                                        <button onClick={() => this.onRoomUpdate(room.id)} className="btn btn-success">
                                            Update
                                        </button>
                                    </div>
                                    <div className="form-group">
                                        <button onClick={() => this.onRoomDelete(room.id)} className="btn btn-danger">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }

    render() {
        let content = this.state.loading ? (
            <p>
                <em>Loading...</em>
            </p>
        ) : (
                this.renderAllRoomsTable(this.state.rooms)    
            )

        return (
            <div>
                <h1>All Rooms</h1>
                <p>Here you can see all Rooms</p>
                {content}
            </div>
        )
    }
}