import React from 'react';
import { styled, useTheme } from '@mui/material/styles'; 
import SideBar from '../../Components/SideBar';
import MuiDrawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Subscription = () => {
  return (
    <Box style={{display:'flex'}}>
    <SideBar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
     <Box></Box>
    </Box>
  </Box>
  )
}

export default Subscription