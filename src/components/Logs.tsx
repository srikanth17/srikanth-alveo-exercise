import React, { useRef } from 'react';
import { Typography } from '@material-ui/core';
import { RootState } from '../reducers';
import { connect } from 'react-redux';
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  List,
} from 'react-virtualized';

const mapState = (state: RootState) => ({
  logs: state.logs,
});

type LogsProps = ReturnType<typeof mapState>;

const Logs = ({ logs }: LogsProps) => {
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );
  return (
    <>
      <Typography component="p">Log: </Typography>
      <div style={{ width: '100%', height: '100vh' }}>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={cache.current.rowHeight}
              deferredMeasurementCache={cache.current}
              rowCount={logs.length}
              rowRenderer={({ key, index, style, parent }) => {
                const log = logs[index];
                return (
                  <CellMeasurer
                    key={key}
                    cache={cache.current}
                    parent={parent}
                    columnIndex={0}
                    rowIndex={index}
                  >
                    <div style={style}>
                      <Typography component="p">
                        {log.datetime} {log.severity} {log.message}
                      </Typography>
                    </div>
                  </CellMeasurer>
                );
              }}
            />
          )}
        </AutoSizer>
      </div>
    </>
  );
};

export default connect(mapState)(Logs);
