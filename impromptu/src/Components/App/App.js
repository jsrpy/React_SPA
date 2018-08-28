import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return
    } else {
      let newList = this.state.playlistTracks.slice();
      newList.push(track);
      this.setState({playlistTracks : newList});
      //this.setState({playlistTracks : this.state.playlistTracks.slice().push(track)});
    }
  }

  removeTrack(track) {
    //let newList = this.state.playlistTracks.slice();
    this.setState({playlistTracks : this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id)});
  }

  updatePlaylistName(name) {
    this.setState({playlistName : name});
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs)
    this.setState({playlistName: 'New Playlist', playlistTracks: [] })
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({ searchResults: searchResults })
    })
    //debug
    this.state.searchResults.map(track => 
      console.log(`id: ${track.id}, name: ${track.name}, uri: ${track.uri}`)
    )
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <td>
              <small className="d1 copy">Spotify Library</small>
            </td>
            <td>
              <h1>Im<span className="highlight">promp</span>tu</h1>
            </td>
            <td className="d3">
              <small><a href="https://open.spotify.com/collection/playlists" target="_blank" >Spotify Library</a></small>
            </td>
          </tr>
        </table>
        <div className="App">
          <SearchBar onSearch={this.search} /> 
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} 
                      onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onClick={this.savePlaylist} /> 
          </div>
        </div>
      </div>      
    );
  }
}

export default App;