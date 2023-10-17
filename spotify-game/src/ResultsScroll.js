import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container, List, ListItem } from '@mui/material';

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
    <Grid container  sx={{height: '100%'}} direction="column" wrap='nowrap'>
      <Grid item xs={1}>
        <Typography variant="h3" align='center'>
          You chose song number {selection}
        </Typography>
        <Typography variant="h5" align='center'>
          Here are the results from previous days:
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Box sx={{border: 1, mx: 5, my: 2, maxHeight: '38%', overflow: 'auto'}}>
          <List>
            {aBunchOfListItems()}
          </List>
        </Box>
      </Grid>
    </Grid>
  </Card>;
}

const aBunchOfListItems = () => {
  let items = []
  for (let i = 0; i < 50; i++){
    items[i] = <ListItem>potato</ListItem>
  }
  return items
}

export default ResultsScroll;
