import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { CardContent, CardHeader, List, ListItem, Typography } from '@mui/material';
import TrackCard from './TrackCard';

import {getResultsData} from './utilities'

const ResultsScroll = () => {
  return <Card sx={{
      borderRadius: 5,
      backgroundColor: '#fffef7',
      height: {
        xs: "90vh",
        md: "80vh",
      },
      width: {
        xs: "90vw",
        md: "80vw",
      },
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
        <Grid item xs={12}>
          <Box sx={{border: 1, mx: 3, p: 0, height: {xs: "74vh", md: "68vh"}, overflow: 'auto'}}>
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

  return <Grid container sx={{
      height: heights,
      // backgroundColor: 'red'
    }} columns={30} justifyContent='space-between' alignItems='center'>
      <Grid item xs={5} md={1}>
        <Card container sx={{
          backgroundColor: 'lightblue',
          width: {
            xs: 240,
            md: 140,
          },
          transform: {
            xs: '',
            md: 'rotate(270deg) translate(0, -42px)',
          },
          }}>
            <Typography variant='h6' align='center'>
              {date}
            </Typography>
        </Card>
      </Grid>
      <Grid item xs={26} md={29}>
        <Grid container sx={{
          height: heights
          }} justifyContent='space-around' alignItems='center'>
          <Grid item xs={10} md={5}>
            <TrackCard
              forceSmall
              trackId={track1Id}
              isSelected={selection==='1'}
              isEnabled={false}
            />
          </Grid>
          <Grid item xs={10} md={5}>
            <TrackCard
              forceSmall
              trackId={track2Id}
              isSelected={selection==='2'}
              isEnabled={false}
            />
          </Grid>
        </Grid>
      </Grid>
  </Grid>
}

const aBunchOfListItems = () => {
  let tracks = getResultsData();
  console.log(tracks);
  let items = []
  for (let i = 0; i < tracks.length; i++) {
    items.push(
      <ListItem disablePadding sx={{borderBottom: i===(tracks.length-1) ? 0 : 1}}>
        <Result
          date={tracks[i]['dateStr']}
          selection={tracks[i]['selection']}
          track1Id={tracks[i]['track1Id']}
          track2Id={tracks[i]['track2Id']}
        />
      </ListItem>
    )
  }
  return items
}

export default ResultsScroll;
