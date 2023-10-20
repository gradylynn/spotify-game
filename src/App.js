import React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ResultsScroll from './ResultsScroll';
import TrackCard from './TrackCard';

import trackIds from './track_ids.json';
let id1 = trackIds[Math.floor(Math.random()*trackIds.length)]
let id2 = trackIds[Math.floor(Math.random()*trackIds.length)]

const App = () => {
  const [selection, setSelection] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  return (
    <div>
      <Container>
        <Modal open={showResults} onClose={() => {setShowResults(false)}}>
          <ResultsScroll selection={selection}/>
        </Modal>
        <Grid container spacing={2} sx={{height: '100vh'}} direction="column" justifyContent="space-around" wrap="nowrap">
          <Grid item xs={1}>
            <Box sx={{mt: 6}}>
              <Typography variant="h2" align='center'>
                The Daily Spot
              </Typography>
              <Typography variant="h4" align='center'>
                Which song will have more total Spotify listens in 2 weeks?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <TrackCard
              trackId={id1}
              isSelected={selection===1}
              isEnabled={!submitted}
              checkCallback={() => {setSelection(1)}}
            />
          </Grid>
          <Grid item xs={1}>
            <TrackCard
              trackId={id2}
              isSelected={selection===2}
              isEnabled={!submitted}
              checkCallback={() => {setSelection(2)}}
            />
          </Grid>
          <Grid item xs={1} alignSelf="center">
            <Button
              variant="contained"
              disabled={selection===0}
              onClick={() => {setSubmitted(true); setShowResults(true);}}
            >
              {submitted ? 'View Results' : 'Submit Prediction'}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

document.body.style = 'background: #FDFCEB;';

export default App;
