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

import Cookies from 'js-cookie';

import tracks from './tracks.json';

let cookieSelection = parseInt(Cookies.get('selection'));

const App = () => {
  const [selection, setSelection] = useState(cookieSelection ? cookieSelection : 0);
  const [submitted, setSubmitted] = useState(Boolean(cookieSelection));
  const [showResults, setShowResults] = useState(Boolean(cookieSelection));

  return (
    <div>
      <Container>
        <Modal open={showResults} onClose={() => {setShowResults(false)}}>
          <ResultsScroll selection={selection}/>
        </Modal>
        <Grid container spacing={2} sx={{height: '100vh'}} direction="column" justifyContent="space-around" wrap="nowrap">
          <Grid item xs={1}>
            <Box sx={{mt: 6}}>
              <Typography variant="h2" align='center' sx={{
                fontSize: {
                xs: "50px",
                md: "60px",
              }}}>
                The Daily Spot
              </Typography>
              <Typography variant="h4" align='center'sx={{
                fontSize: {
                xs: "24px",
                md: "35px",
              }}}>
                Which song will have more total Spotify listens in 2 weeks?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <TrackCard
              trackId={tracks[0]['track1Id']}
              isSelected={selection===1}
              isEnabled={!submitted}
              checkCallback={() => {setSelection(1)}}
            />
          </Grid>
          <Grid item xs={1}>
            <TrackCard
              trackId={tracks[0]['track2Id']}
              isSelected={selection===2}
              isEnabled={!submitted}
              checkCallback={() => {setSelection(2)}}
            />
          </Grid>
          <Grid item xs={1} alignSelf="center">
            <Button
              variant="contained"
              disabled={selection===0}
              onClick={() => {setSubmitted(true); setShowResults(true); Cookies.set('selection', selection);}}
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
