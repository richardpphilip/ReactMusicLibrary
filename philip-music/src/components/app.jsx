
import React, {Component} from 'react';
import axios from 'axios'
import Music from './Music/Music';
import MusicTable from './Music/MusicTable';

class App extends Component {
    constructor(){
        super();
        this.getAllMusic = this.getAllMusic.bind(this);
    }
    state = {
        allMusic: []
  }

  componentDidMount(){
    //gets called after the component did mount (rendered to the page)
    console.log("component did mount");
    this.getAllMusic();
   
  }


  async getAllMusic(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    this.setState({
      allMusic: response.data
    })
  }

  mapMusic(){
    console.log("music state", this.state);
    return this.state.allMusic.map(music =>
      <Music 
        key={music.id}
        music={music}
        deleteMusic = {(songId) => this.deleteMusic(songId)}
      />
    )
  }


  async deleteMusic(songId){
      console.log("DELETE", songId);
      await axios.delete(`http://127.0.0.1:8000/music/${songId}/`);
      this.getAllMusic();
  }

  render(){
    console.log("this.state", this.state);
    return(
    <div>
        <MusicTable mapMusic={() => this.mapMusic()}/>
    </div>
    );
  }
}

export default App;