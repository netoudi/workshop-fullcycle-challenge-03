import Routes from './components/Routes';
import Menu from './components/Menu';
import { Box, Container, CssBaseline, MuiThemeProvider, Typography } from '@material-ui/core';
import theme from './theme';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Menu />
    <Container>
      <Box mt={4}>
        <Typography variant="h4">Routes</Typography>
      </Box>
      <Box mt={2}>
        <Routes />
      </Box>
    </Container>
  </MuiThemeProvider>
);

export default App;
