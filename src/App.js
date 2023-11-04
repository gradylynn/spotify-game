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

import tracks from './tracks.json';
import {submitSelection, getTodaysSelection} from './utilities';

const App = () => {
  let todaysSelection = getTodaysSelection();
  const [selection, setSelection] = useState(todaysSelection);
  const [submitted, setSubmitted] = useState(Boolean(todaysSelection));
  const [showResults, setShowResults] = useState(Boolean(todaysSelection));

  return (
    <div>
      <Container>
        <Modal open={showResults} onClose={() => {setShowResults(false)}}>
          <ResultsScroll closeFunc={() => {setShowResults(false)}}/>
        </Modal>
        <Grid container spacing={2} sx={{height: '100vh'}} direction="column" justifyContent="space-around" wrap="nowrap">
          <Grid item xs={1}>
            <Box sx={{mt: 6}}>
              <Typography variant="h2" align='center' sx={{
                fontSize: {
                xs: "45px",
                md: "60px",
              }}}>
                The Daily Spot
              </Typography>
              <Typography variant="h4" align='center'sx={{
                fontSize: {
                xs: "20px",
                md: "35px",
              }}}>
                Which song will have more total Spotify listens in 2 weeks?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <TrackCard
              trackId={tracks[0]['track1Id']}
              isSelected={selection==='1'}
              isEnabled={!submitted}
              checkCallback={() => {setSelection('1')}}
            />
          </Grid>
          <Grid item xs={1}>
            <TrackCard
              trackId={tracks[0]['track2Id']}
              isSelected={selection==='2'}
              isEnabled={!submitted}
              checkCallback={() => {setSelection('2')}}
            />
          </Grid>
          <Grid item xs={1} alignSelf="center">
            <Button
              variant="contained"
              disabled={selection==='0'}
              onClick={() => {
                if (!submitted) {
                  setSubmitted(true);
                  submitSelection(selection);
                }
                setShowResults(true);
              }}
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
