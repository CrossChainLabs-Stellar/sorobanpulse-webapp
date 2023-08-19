import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import Header from "./components/Header";
import SorobanBox from './components/SorobanBox';
import Dashboard from './components/Dashboard';
import theme from './components/Theme'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <SorobanBox />
        <Dashboard />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
