import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const TrackCard = ({trackId, isEnabled, isSelected, isCorrect, checkCallback, forceSmall, numListens}) => {
    const cardHeights = {
      xs: 112,
      sm: 120,
      md: 210,
      lg: 210,
      xl: 300,
    }

    return <Card
      raised={isSelected}
      sx={{
        height: forceSmall ? {xs: 112, sm: 120} : cardHeights,
        borderRadius: 5,
        backgroundColor: !isSelected ? '#FFFFFF' : isEnabled || typeof isCorrect === 'undefined' ? '#EBFCFD' : isCorrect ? '#ecfdeb' : '#fdebef',
        border: isSelected ? 2 : 0,
        borderColor: isEnabled || typeof isCorrect === 'undefined' ? 'black' : isCorrect ? '#0b8500' : '#db0037'
      }}
    >
      <Grid container sx={{height: forceSmall ? 120 : cardHeights}} alignItems="center">
        <Grid item xs={10}>
          <Box sx={{
            ml: forceSmall ? {
              xs: 16/8,
              sm: 20/8,
            } : {
              xs: 16/8,
              sm: 20/8,
              md: 29/8,
              lg: 29/8,
              xl: 34/8
            },
            mr: 0
          }}>
            <TrackFrame trackId={trackId} forceSmall={forceSmall}/>
            
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Grid container justifyContent="center">
            <Grid item>
              <Checkbox
                checked={isSelected}
                onChange={checkCallback}
                disabled={!isEnabled}
                size="large"
                checkedIcon={!isEnabled && isCorrect===false ? <DisabledByDefaultIcon/> : <CheckBoxIcon/>}
              />
              <Typography variant="h6" align='center' style={{whiteSpace: 'pre-line'}} sx={{
                  fontSize: {
                  xs: "11px",
                  md: forceSmall ? "14px" : "18px",
              }}}>
                {numListens}
              </Typography>
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
      style={{"borderRadius": "12px"}}
      src={`https://open.spotify.com/embed/track/${trackId}`}
      width="100%"
      height={forceSmall ? 80 : iframeHeight}
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
}

export default TrackCard;
