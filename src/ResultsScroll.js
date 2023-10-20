import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { CardContent, CardHeader, List, ListItem } from '@mui/material';
import TrackCard from './TrackCard';

import trackIds from './track_ids.json';

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
    <CardHeader sx={{height: '7vh', p: 0, pt: 2}}
      title={`You chose song number ${selection}`}
      titleTypographyProps={
        {
          fontSize: {
            xs: "max(20px, 3vh)",
            sm: "max(20px, 3vh)",
            md: "max(20px, 4vh)",
            lg: "max(20px, 4vh)",
            xl: "max(20px, 5vh)",
          },
          align: 'center',
          whiteSpace: 'nowrap'
        }
      }
      subheader='Here are the results from previous days:'
      subheaderTypographyProps={
        {
          fontSize: "max(15px, 2vh)",
          align: 'center'
        }
      }
    />
    <CardContent sx={{p: 0}}>
      <Grid container sx={{height: '73vh'}} direction="column" justifyContent="space-around" wrap="nowrap">
        <Grid item xs={11}>
          <Box sx={{border: 1, mx: 3, p: 0, height: '65vh', overflow: 'auto'}}>
            <List disablePadding>
              {aBunchOfListItems()}
            </List>
          </Box>
        </Grid>
      </Grid>
    </CardContent>
  </Card>;
}

const ResultItem = ({}) => {
  let rand = Math.random()
  return <ListItem disablePadding>
    <Grid container sx={{
      height: {
        xs: 300,
        sm: 300,
        md: 160,
        lg: 160,
        xl: 160,
      },
      borderBottom: 1
    }} justifyContent='space-around' alignItems='center'>
      <Grid item xs={10} md={5}>
        <TrackCard
          forceSmall
          trackId={trackIds[Math.floor(Math.random()*trackIds.length)]}
          isSelected={rand < 0.5}
          isEnabled={false}
        />
      </Grid>
      <Grid item xs={10} md={5}>
        <TrackCard
          forceSmall
          trackId={trackIds[Math.floor(Math.random()*trackIds.length)]}
          isSelected={rand > 0.5}
          isEnabled={false}
        />
      </Grid>
    </Grid>
  </ListItem>
}

const aBunchOfListItems = () => {
  let items = []
  for (let i = 0; i < 10; i++){
    items[i] = <ResultItem/>
  }
  return items
}

export default ResultsScroll;
