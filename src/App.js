import React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ResultsScroll from './ResultsScroll';

const App = () => {
  const [selection, setSelection] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <Container>
        <Modal open={submitted} onClose={() => {setSubmitted(false)}}>
          <ResultsScroll selection={selection}/>
        </Modal>
        <Grid container spacing={2} sx={{height: '100vh'}} direction="column" justifyContent="space-around" wrap="nowrap">
          <Grid item xs={1}>
            <Box sx={{mt: 6}}>
              <Typography variant="h2" align='center'>
                The Daily Spot
              </Typography>
              <Typography variant="h4" align='center'>
                Which song will have more total listens in 2 weeks?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <TrackCard
              trackId='5LAUpU2KhoVDnur463CAuT'
              isSelected={selection===1}
              isEnabled={!submitted}
              checkCallback={() => {setSelection(1)}}
            />
          </Grid>
          <Grid item xs={1}>
            <TrackCard
              trackId='4JyZnltqvgBqTRLCMxj6Kk'
              isSelected={selection===2}
              isEnabled={!submitted}
              checkCallback={() => {setSelection(2)}}
            />
          </Grid>
          <Grid item xs={1} alignSelf="center">
            <Button
              variant="contained"
              disabled={selection===0 || submitted}
              onClick={() => {setSubmitted(true)}}
            >
              Submit Prediction
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}


const TrackCard = ({trackId, isSelected, isEnabled, checkCallback}) => {
    const cardHeights = {
      xs: 120,
      sm: 120,
      md: 210,
      lg: 210,
      xl: 300,
    }

    return <Card
      raised={isSelected}
      sx={{
        height: cardHeights,
        borderRadius: 5,
        backgroundColor: isSelected ? '#EBFCFD' : '#FFFFFF',
        border: isSelected ? 2 : 0,
        borderColor: isEnabled ? 'black' : '#0b8500'
      }}
    >
      <Grid container sx={{height: cardHeights}} alignItems="center">
        <Grid item xs={10}>
          <Box sx={{ml: {xs: 20/8, sm: 20/8, md: 29/8, lg: 29/8, xl: 34/8}, mr: 0}}>
            <TrackChoice trackId={trackId}></TrackChoice>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Grid container justifyContent="center">
            <Grid item>
              <Checkbox checked={isSelected} onChange={checkCallback} disabled={!isEnabled} size="large"/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  </Card>
}

const TrackChoice = ({trackId}) => {
  const theme = useTheme();
  let iframeHeight = 80;
  if (useMediaQuery(theme.breakpoints.up('md'))) {
    iframeHeight += 72;
  }
  if (useMediaQuery(theme.breakpoints.up('xl'))) {
    iframeHeight += 80;
  }

  return (
    <iframe
      title='spotify-track'
      style={{"border-radius": "12px"}}
      src={`https://open.spotify.com/embed/track/${trackId}`}
      width="100%"
      height={iframeHeight}
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}

document.body.style = 'background: #FDFCEB;';

export default App;
