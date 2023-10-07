import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <p>Hello world!</p>
        <TrackChoice trackId='0KhKVGSHBhUs8hIexyvwj4'></TrackChoice>
      </div>
    );
  }
}

class TrackChoice extends Component {
  render() {
    return (
      <div>
        <iframe
          style={{"border-radius": "12px"}}
          src={`https://open.spotify.com/embed/track/${this.props.trackId}`}
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    );
  }
}

export default App;
