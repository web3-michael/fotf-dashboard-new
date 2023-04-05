import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import "../styles/globals.css";
import GlobalStyles from '@mui/material/GlobalStyles';

const drawerWidth = 240;

const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
const backgroundColorGlobal = getComputedStyle(document.documentElement).getPropertyValue('--background-color');
const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color');


export default function LeftDrawer() {
  return (
    
    <Box sx={{ display: 'flex' }}>
    <GlobalStyles styles={{ Drawer: { backgroundColor: backgroundColorGlobal }, Toolbar: { backgroundColor: backgroundColorGlobal },
    List: { backgroundColor: backgroundColorGlobal }

}} />
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}
      >
        {/* <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar> */}
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          }, backgroundColor: backgroundColorGlobal
        }}
        variant="permanent"
        anchor="left"
        
      >
        <Toolbar sx={{ backgroundColor: backgroundColorGlobal}} />
        <Divider />
        <List sx={{ backgroundColor: backgroundColorGlobal}}>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List sx={{ backgroundColor: backgroundColorGlobal}}>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}