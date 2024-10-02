import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function Events() {
  const classes = useStyles();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // API로부터 이벤트 데이터를 가져오는 로직
    // setEvents(data);
  }, []);

  return (
    <Grid container spacing={4}>
      {events.map((event) => (
        <Grid item key={event.id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {event.title}
              </Typography>
              <Typography>
                {event.description}
              </Typography>
            </CardContent>
            <Button size="small" color="primary">
              자세히 보기
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Events;
