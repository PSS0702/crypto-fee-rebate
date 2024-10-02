import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  logo: {
    width: 50,
    height: 50,
  },
});

function Exchanges() {
  const classes = useStyles();
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    // API로부터 거래소 데이터를 가져오는 로직
    // setExchanges(data);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="exchanges table">
        <TableHead>
          <TableRow>
            <TableCell>로고</TableCell>
            <TableCell>거래소</TableCell>
            <TableCell align="right">수수료율</TableCell>
            <TableCell align="right">할인율</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exchanges.map((exchange) => (
            <TableRow key={exchange.id} onClick={() => window.open(exchange.link, '_blank')}>
              <TableCell>
                <img src={exchange.logo} alt={exchange.name} className={classes.logo} />
              </TableCell>
              <TableCell component="th" scope="row">
                {exchange.name}
              </TableCell>
              <TableCell align="right">{exchange.fee}%</TableCell>
              <TableCell align="right">{exchange.discount}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Exchanges;
