import React, { Component } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

class App extends Component {
  render() {
    return (
      <div>
        <p>Hello world!</p>
        <Container>
          <Box sx={{ my: 5, ml: 5, backgroundColor: 'red', flexgrow: 1}}>
            <Box sx={{ m: 5}}>
              <TrackCard trackId='5LAUpU2KhoVDnur463CAuT'></TrackCard>
            </Box>
            <Box sx={{ m: 5}}>
              <TrackCard trackId='4JyZnltqvgBqTRLCMxj6Kk'></TrackCard>
            </Box>
          </Box>
        </Container>
      </div>
    );
  }
}

class TrackCard extends Component {
  render() {
    return <Card
      raised={true}
    >
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={10}>
            <Box sx={{ my: 5, ml: 5 }}>
              <TrackChoice trackId={this.props.trackId}></TrackChoice>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box sx={{ m: 5 }}>
              <Checkbox {...label} size="large"></Checkbox>
            </Box>
          </Grid>
        </Grid>
    </Card>
  }
}

class TrackChoice extends Component {
  render() {
    return (
        <iframe
          title='spotify-track'
          style={{"border-radius": "12px"}}
          src={`https://open.spotify.com/embed/track/${this.props.trackId}`}
          width="100%"
          height="100%"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
    );
  }
}

export default App;
