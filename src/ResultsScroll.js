import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { CardContent, CardHeader, List, ListItem } from '@mui/material';

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
      // action={
      //   <IconButton aria-label="settings">
      //     <CloseIcon />
      //   </IconButton>
      // }
      title={`You chose song number ${selection}`}
      titleTypographyProps={
        {
          fontSize: {
            xs: "max(20px, 3vh)",
            sm: "3vh",
            md: "4vh",
            lg: "4vh",
            xl: "5vh",
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
            <List>
              {aBunchOfListItems()}
            </List>
          </Box>
        </Grid>
      </Grid>
    </CardContent>
  </Card>;
}

const aBunchOfListItems = () => {
  let items = []
  for (let i = 0; i < 100; i++){
    items[i] = <ListItem>{`potato ${i}`}</ListItem>
  }
  return items
}

export default ResultsScroll;
