import React, { Component } from 'react';
import axios from 'axios';

export class Rooms extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            rooms: [],
            loading: false
        }
    }

    componentDidMount() {
        this.populateRoomsData();
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
                                <td>{room.dateCreated}</td>
                                <td>-</td>
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