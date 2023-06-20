
import React, { useState } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Montserrat from "./asset/fonts/Montserrat/Montserrat-Regular.ttf";
import { BrowserRouter as Router } from "react-router-dom";
import RoutePages from './RoutePages';

const theme = createTheme({
  palette: {
    mode: "light"
    ,
    Black: {
      main: "#212121",
    },
    White: {
      main: "#FFFFFF",
    }

  },
  typography: {
    
    fontFamily: 'Poppins',
    fontStyle: "normal",
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: Montserrat,
      },
    },
  },
})


export default class App extends React.Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <RoutePages />
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}

