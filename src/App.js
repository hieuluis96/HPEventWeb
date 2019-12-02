import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChiTietSuKien from './pages/ChiTietSuKien';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DanhSachSuKien from './pages/DanhSachSuKien';
import { ThemeProvider, Theme, createMuiTheme } from '@material-ui/core';
import ChuDe from './pages/ChuDe';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#1a237e',
      dark: '#000'
    },
    secondary: {
      main: '#009688',
    },
  },
  typography: {
    useNextVariants: true
  },


});



function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          {/* <ChiTietSuKien /> */}
          <Switch>
            <Route exact path="/">
              <DanhSachSuKien />
            </Route>
            <Route path="/detail">
              <ChiTietSuKien />
            </Route>
            <Route path="/categories">
              <ChuDe />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
