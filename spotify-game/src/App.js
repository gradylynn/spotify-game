import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const App = () => {
    return (
      <div>
        <Container>
          <Grid container sx={{height: '100vh'}} direction="column" justifyContent="space-around">
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <Typography variant="h2">
                Spotter
              </Typography>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <Typography variant="h4">
                Predict which song will have more total listens in 2 weeks:
              </Typography>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <TrackCard trackId='5LAUpU2KhoVDnur463CAuT'></TrackCard>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <TrackCard trackId='4JyZnltqvgBqTRLCMxj6Kk'></TrackCard>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} alignSelf="center">
              <Button variant="contained">Contained</Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }


const TrackCard = ({trackId}) => {
      return <Card raised={true} sx={{
        height: {
          xs: 160,
          sm: 160,
          md: 252,
          lg: 252,
          xl: 300,
        },
      }}>
        <Grid container>
          <Grid item xs={10}>
            <Box sx={{my: 5, ml: 5}}>
              <TrackChoice trackId={trackId}></TrackChoice>
            </Box>
          </Grid>
          <Grid item xs={2} alignSelf='center'>
            <Box sx={{m: 5}}>
              <Checkbox {...label} size="large"></Checkbox>
            </Box>
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

export default App;
