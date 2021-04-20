import React from 'react'


const Music= (props) => {
    return (
        <tbody>
            <tr>
                <td>{props.music.title}</td>
                <td>{props.music.artist}</td>
                <td>{props.music.album}</td>
                <td>{props.music.release_date}</td>
                <td>{props.music.like}</td>
                <td><button onClick={() => props.deleteMusic(props.music.id)}>Delete</button></td>
            </tr>
        </tbody>
    );
}

export default Music;