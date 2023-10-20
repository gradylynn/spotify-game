import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const TrackCard = ({trackId, isSelected, isEnabled, checkCallback, forceSmall}) => {
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
        height: forceSmall ? 120 : cardHeights,
        borderRadius: 5,
        backgroundColor: isSelected ? '#EBFCFD' : '#FFFFFF',
        border: isSelected ? 2 : 0,
        borderColor: isEnabled ? 'black' : '#0b8500'
      }}
    >
      <Grid container sx={{height: forceSmall ? 120 : cardHeights}} alignItems="center">
        <Grid item xs={10}>
          <Box sx={{
            ml: forceSmall ? 20/8 : {
              xs: 20/8,
              sm: 20/8,
              md: 29/8,
              lg: 29/8,
              xl: 34/8
            }, mr: 0
          }}>
            <TrackFrame trackId={trackId} forceSmall={forceSmall}/>
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

const TrackFrame = ({trackId, forceSmall}) => {
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
      height={forceSmall ? 80 : iframeHeight}
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
}

export default TrackCard;
