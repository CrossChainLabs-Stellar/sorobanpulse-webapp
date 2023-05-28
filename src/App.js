import './App.css';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline, Divider } from '@mui/material';

import Header from "./components/Header";
import SorobanBox from './components/SorobanBox';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={{}}>
        <CssBaseline />
        <Header />
        <SorobanBox />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
