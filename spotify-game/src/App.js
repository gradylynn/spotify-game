import React, { Component } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class App extends Component {
  render() {
    return (
      <div>
        <p>Hello world!</p>
        <Container>
          <Card
            raised={true}
          >
            <Grid container alignItems="center" justifyContent="center">
              <Grid xs={10}>
                <Box sx={{ my: 5, ml: 5 }}>
                  <TrackChoice trackId='27r42A2NMzg2hoFZjQFrm3'></TrackChoice>
                </Box>
              </Grid>
              <Grid container xs={2} alignItems="center" justifyContent="center">
                <Box sx={{ m: 5 }}>
                  <Checkbox {...label} size="large"></Checkbox>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </div>
    );
  }
}

class TrackChoice extends Component {
  render() {
    return (
      <div>
        <iframe
          title='potato'
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
