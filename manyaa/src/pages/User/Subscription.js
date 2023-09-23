import React from 'react';
import { styled, } from '@mui/material/styles'; 
import SideBar from '../../Components/SideBar';
import {Box} from '@mui/material';
import Card from "../../Components/Card";

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Subscription = () => {
  return (
    <Box style={{display:'flex'}}>
    <SideBar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
     <Box >
        <Card />
      </Box>
     </Box>
    </Box>
  )
}

export default Subscription
