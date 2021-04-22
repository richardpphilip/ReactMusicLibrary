import React, { Component } from 'react';
class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            search: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   updateSearch(event) {
        this.setState({
            search: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const song = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            release_date: this.state.release_date,
            like: this.state.like
        }
        this.props.addNewSong(song);
        this.setState({
            title:'',
            artist: '',
            album:'',
            release_date:'',
            like: ''
        })
    }
    render(){
        return(
            <div>
                <hr />
                <h2>Search</h2>
                    <div className='row col-align'>
                        <div className='col-md-4'>
                            <label>Title Search:</label>
                            <input type='text' name='title' value = {this.state.search} onChange={this.updateSearch.bind(this)}/>
                        </div>
                    </div>
            </div>
        )
    }
}
export default SearchBar