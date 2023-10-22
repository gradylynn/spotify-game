import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { CardContent, CardHeader, List, ListItem, Typography } from '@mui/material';
import TrackCard from './TrackCard';

import tracks from './tracks.json';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const today = new Date('1970-01-10T00:00:00');
const yesterday = new Date('1970-01-09T00:00:00');

const ResultsScroll = ({selection}) => {
  return <Card sx={{
      borderRadius: 5,
      backgroundColor: '#fffef7',
      height: '80vh',
      width: '80vw',
      minHeight: '1000',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
  }}>
    <CardHeader sx={{height: '5vh', p: 0, pt: 2}}
      title='Thanks for playing!'
      titleTypographyProps={
        {
          fontSize: {
            xs: "max(20px, 1vh)",
            sm: "max(20px, 1vh)",
            md: "max(20px, 2vh)",
            lg: "max(20px, 2vh)",
            xl: "max(20px, 3vh)",
          },
          align: 'center',
          whiteSpace: 'nowrap'
        }
      }
      subheader='Here are your results:'
      subheaderTypographyProps={
        {
          fontSize: "max(15px, 2vh)",
          align: 'center'
        }
      }
    />
    <CardContent sx={{p: 0}}>
      <Grid container sx={{py: 2}} direction="column" justifyContent="space-around" wrap="nowrap">
        <Grid item xs={11}>
          <Box sx={{border: 1, mx: 3, p: 0, height: '68vh', overflow: 'auto'}}>
            <List disablePadding>
              {aBunchOfListItems()}
            </List>
          </Box>
        </Grid>
      </Grid>
    </CardContent>
  </Card>;
}

const Result = ({date, selection, track1Id, track1Playcount, track2Id, track2Playcount, finalized}) => {
  const heights = {
    xs: 300,
    md: 160,
  };

  let d = new Date(date + 'T00:00:00');

  let dateString;
  if (
    today.getDate()===d.getDate() &&
    today.getMonth()===d.getMonth() &&
    today.getFullYear()===d.getFullYear()
  ) {
    dateString = 'Today';
  }
  else if (
    yesterday.getDate()===d.getDate() &&
    yesterday.getMonth()===d.getMonth() &&
    yesterday.getFullYear()===d.getFullYear()
  ) {
    dateString = 'Yesterday';
  }
  else {
    dateString = `${months[d.getMonth()]} ${d.getDate()}`
  }

  let thing = <Card container sx={{
    backgroundColor: 'lightblue',
    width: {
      xs: 240,
      md: 140,
    },
    transform: {
      xs: 'rotate(270deg) translate(0, -97px)',
      md: 'rotate(270deg) translate(0, -42px)',
    },
    }}>
      <Typography variant='h6' align='center'>
       {dateString}
      </Typography>
  </Card>

  return <Grid container sx={{
    height: heights
    }} columns={30} justifyContent='space-between' alignItems='center'>
      <Grid item xs={1}>
        {thing}
      </Grid>
      <Grid item xs={29}>
        <Grid container sx={{
          height: heights
          }} justifyContent='space-around' alignItems='center'>
          <Grid item xs={10} md={5}>
            <TrackCard
              forceSmall
              trackId={track1Id}
              isSelected={selection===1}
              isEnabled={false}
            />
          </Grid>
          <Grid item xs={10} md={5}>
            <TrackCard
              forceSmall
              trackId={track2Id}
              isSelected={selection===2}
              isEnabled={false}
            />
          </Grid>
        </Grid>
      </Grid>
  </Grid>
}

const aBunchOfListItems = () => {
  let items = []
  for (let i = 0; i < tracks.length; i++) {
    let rand = Math.random()
    items.push(
      <ListItem disablePadding sx={{borderBottom: i===(tracks.length-1) ? 0 : 1}}>
        <Result
          date={tracks[i]['date']}
          selection={rand < .34 ? 0 : (rand > .66 ? 1 : 2)}
          track1Id={tracks[i]['track1Id']}
          track2Id={tracks[i]['track2Id']}
        />
      </ListItem>
    )
  }
  return items
}

export default ResultsScroll;
