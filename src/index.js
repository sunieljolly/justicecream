import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Header from "./Header";
import JsonDataDisplay from "./JsonDataDisplay"
const themeLight = createTheme({
  palette: {
    background: {
      default: "#FC5200"
    },
    text: {
      primary: "#ffffff",
      fontSize: 16,
      
    }
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    },

  }
});

const App = () => {
  const [light, setLight] = React.useState(true);
  return (    
    <MuiThemeProvider theme={light ? themeLight : themeDark}>
    <Button variant="contained" onClick={() => setLight(prev => !prev)}>Theme</Button>
    <Header/>  
      <CssBaseline />
      
    <JsonDataDisplay />
    </MuiThemeProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
