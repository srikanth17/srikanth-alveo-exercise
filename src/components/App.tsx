import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Log, SetLogsAction } from '../types/types';
import { Container, makeStyles } from '@material-ui/core';
import logsReducer from '../reducers/logs';
import { setLogs } from '../actions/logs';
import Logs from './Logs';

const ENDPOINT = 'http://localhost:4000';

const useStyles = makeStyles({
  container: {
    marginTop: 40,
  },
});

const mapDispatch = (
  dispatch: ThunkDispatch<typeof logsReducer, void, SetLogsAction>
) => ({
  setLogs: (log: Log) => dispatch(setLogs(log)),
});

type AppProps = ReturnType<typeof mapDispatch>;

const App = ({ setLogs }: AppProps) => {
  const classes = useStyles();
  const [totalInfo, setTotalInfo] = useState(0);
  const [totalWarning, setTotalWarning] = useState(0);
  const [totalError, setTotalError] = useState(0);

  useEffect(() => {
    const socket = io(ENDPOINT, {
      transports: ['websocket', 'polling', 'flashsocket'],
    });
    socket.on('Logs', (data: Log) => {
      if (data.severity === 'INFO') setTotalInfo(prev => prev + 1);
      else if (data.severity === 'WARNING') setTotalWarning(prev => prev + 1);
      else if (data.severity === 'ERROR') setTotalError(prev => prev + 1);
      setLogs(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Grid item xs={12}>
        <Typography component="p">INFO: {totalInfo}</Typography>
        <Typography component="p">WARNING: {totalWarning}</Typography>
        <Typography component="p" paragraph>
          ERROR: {totalError}
        </Typography>
        <Logs />
      </Grid>
    </Container>
  );
};

export default connect(undefined, mapDispatch)(App);
