import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useEffect, useState } from 'react';
import api from '../../utils/api';
import { Route } from '../../utils/models';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Routes = () => {
  const classes = useStyles();
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect(() => {
    api.get('/routes').then((response) => {
      setRoutes(response.data);
    });
  }, []);

  if (!routes.length) {
    return null;
  }

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Start position <small>(lat, lng)</small></TableCell>
            <TableCell align="right">End position <small>(lat, lng)</small></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {routes.map((route, index) => (
            <TableRow key={index}>
              <TableCell
                component="th"
                scope="row"
              >{route.title}</TableCell>
              <TableCell
                align="right"
                width="20%"
              >{`${route.startPosition.lat}, ${route.startPosition.lng}`}</TableCell>
              <TableCell
                align="right"
                width="20%"
              >{`${route.endPosition.lat}, ${route.endPosition.lng}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Routes;
