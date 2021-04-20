import './App.css';
import React, {Component} from 'react';
import axios from 'axios'
import Player from './components/Player';
import PlayerTable from './components/PlayerTable';

class App extends Component {
  state = {
    players: []
  }

  componentDidMount(){
    //gets called after the component did mount (rendered to the page)
    console.log("component did mount");
    this.getAllPlayers();
  }

  async getAllPlayers(){
    let response = await axios.get('http://127.0.0.1:8000/players/');
    this.setState({
      players: response.data
    })
  }

  mapPlayers(){
    return this.state.players.map(player =>
      <Player 
        key={player.id}
        player={player}
      />
    )
  }

  render(){
    console.log("this.state", this.state);
    return(
    <div>
        <PlayerTable mapPlayers={() => this.mapPlayers()}/>
    </div>
    );
  }
}

export default App;