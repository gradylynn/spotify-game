import React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const App = () => {
  const [selection, setSelection] = useState(0);

  return (
    <div backgroundColor='blue'>
      <Container>
        <Grid container spacing={2} sx={{height: '100vh'}} direction="column" justifyContent="space-around" wrap="nowrap">
          <Grid item xs={1}>
            <Typography variant="h2">
              Spotter
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="h4">
              Predict which song will have more total listens in 2 weeks:
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <TrackCard
              trackId='5LAUpU2KhoVDnur463CAuT'
              isSelected={selection===1}
              checkCallback={() => {setSelection(1)}}
            ></TrackCard>
          </Grid>
          <Grid item xs={1}>
            <TrackCard
              trackId='4JyZnltqvgBqTRLCMxj6Kk'
              isSelected={selection===2}
              checkCallback={() => {setSelection(2)}}
            ></TrackCard>
          </Grid>
          <Grid item xs={1} alignSelf="center">
            <Button variant="contained" disabled={selection===0}>Submit</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}


const TrackCard = ({trackId, isSelected, checkCallback}) => {
    const cardHeights = {
      xs: 120,
      sm: 120,
      md: 210,
      lg: 210,
      xl: 300,
    }

    return <Card raised={isSelected} sx={{height: cardHeights, backgroundColor: isSelected ? '#EBFCFD': '#FFFFFF'}}>
      <Grid container sx={{height: cardHeights}} alignItems="center">
        <Grid item xs={10}>
          <Box sx={{ml: {xs: 20/8, sm: 20/8, md: 29/8, lg: 29/8, xl: 34/8}, mr: 0}}>
            <TrackChoice trackId={trackId}></TrackChoice>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Grid container justifyContent="center">
            <Grid item>
              <Checkbox checked={isSelected} onChange={checkCallback} size="large"></Checkbox>
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
