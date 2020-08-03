import React, { Component } from 'react';

export class Rooms extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            rooms: [],
            loading: false
        }
    }

    renderAllRoomsTable(rooms) {
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
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <td>-</td>
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