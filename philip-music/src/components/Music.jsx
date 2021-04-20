import React from 'react'
//need to change to music
const Player = (props) => {
    return (
        <tbody>
            <tr>
                <td>{props.player.first_name}</td>
                <td>{props.player.last_name}</td>
                <td>{props.player.position}</td>
                <td>{props.player.overall_rating}</td>
                <td>{props.player.team_name}</td>
            </tr>
        </tbody>
    );
}

export default Player;