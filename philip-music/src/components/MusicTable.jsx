import React from 'react'
//need to change to music
const PlayerTable = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Overall Rating</th>
                    <th>Team Name</th>
                </tr>
            </thead>
            {props.mapPlayers()}
        </table>
    );
}

export default PlayerTable;