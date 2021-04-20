import React from 'react'

const MusicTable = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Like</th>
                </tr>
            </thead>
            {props.mapMusic()}
        </table>
    );
}

export default MusicTable;