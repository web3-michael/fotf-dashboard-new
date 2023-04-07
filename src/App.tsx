import {  Box, ImageList, ThemeProvider, createTheme } from "@mui/material";
import { ConnectWallet, ThirdwebNftMedia, useContract, useNFT, useOwnedNFTs } from "@thirdweb-dev/react";
import { useTitle } from "./hooks/useTitle";
import "./styles/Dashboard.css";
import { useAddress } from "@thirdweb-dev/react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSDK } from "@thirdweb-dev/react";
import { Routes, Route, Navigate } from "react-router-dom";
import TheFactory from "./views/TheFactory";
import Home  from "./views/Home";

import NotFound from "./views/NotFound";
import LeftDrawer from "./components/LeftDrawer";
import RightDrawer from "./components/RightDrawer";


function App() {
  useTitle("FOTF | Dashboard");
  //const theme = useTheme();
  //const isMobile = !useMediaQuery(theme.breakpoints.up("md"));
  const sdk = useSDK();
  const provider = sdk?.getProvider();
  const address = useAddress();
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
  const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
  const backgroundColorGlobal = getComputedStyle(document.documentElement).getPropertyValue('--background-color');
  const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color');


  const theme = createTheme({
    typography: {
      fontFamily: [
        'Bebas Neue',
        "Roboto",
        "Helvetica",
        "Arial",
      ].join(','),
      fontSize: 16,
      fontWeightLight: 300,
      
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: backgroundColorGlobal,
            
          },
          
        }
      }, MuiDivider: {
        styleOverrides: {
          root: {
            marginLeft: "20px", 
            marginRight: "20px", 
            opacity: .65
          }
        }
      }, MuiToolbar: {
        styleOverrides: {
          root: {
            padding: 15
          }
        }
      }, 
    },
  });

  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <Box sx={{
          marginLeft: "240px",
          marginRight: "240px",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "white",
        }}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Factory" element={<TheFactory/>}/>
            <Route path="*" element={<NotFound/>}/> 
          </Routes>
          <LeftDrawer/>
          <RightDrawer/>   
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
