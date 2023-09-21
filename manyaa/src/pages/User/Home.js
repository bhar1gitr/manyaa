import React from 'react';
import { styled } from '@mui/material/styles';
import SideBar from '../../Components/SideBar';
import { Divider, Container, Box, Stack, Button } from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const Home = () => {
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));
  return (
    <Box style={{ display: 'flex' }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        <Container>
          <div style={{
            color: '#F87D09',
            marginTop: '25px',
            marginBottom: '20px',
            fontSize: '28px',
            fontWeight: 'bold'
          }}>Welcome, Bharat Sharma</div>
        </Container>
        <Divider sx={{
          backgroundColor: '#A7CDCC',
          height: '2.5px'
        }} />

        <Container>
          <Box style={{
            backgroundColor: '#E2EEEE',
            height: 'fit-content',
            width: '100%',
            borderRadius: '10px',
            marginTop: '20px',
            color:'#004A55'
          }}>
            <Stack sx={{
              padding: '20px'
            }} spacing={4}>
              <div style={{
                fontWeight: 'bold',
                fontSize: '20px'
              }}>Begin your journey towards improved mental health right here.</div>
              <div style={{
                fontSize: '16px'
              }}>Take the first step by scheduling a FREE online mental health assessment session with one of our certified counselors.</div>
              <Box sx={{
                display: 'flex',
                justifyContent: 'start',
              }}>
                <Button sx={{
                  padding: '10px 20px',
                  color: 'white',
                  backgroundColor: '#006f80',
                  '&:hover': {
                    backgroundColor: '#004A55',
                  },
                }}>Get Your Mental Health Assessed →</Button>
              </Box>
            </Stack>
          </Box>
          <Box style={{
            backgroundColor: '#E2EEEE',
            height: 'fit-content',
            width: '100%',
            borderRadius: '10px',
            marginTop: '20px',
            color:'#004A55'
          }}>
            <Stack sx={{
              padding: '20px'
            }} spacing={2}>
             <HelpOutlineOutlinedIcon sx={{
              color:'#FF7E67',
              fontSize:'40px'
             }}/>
              <div style={{
                fontWeight: 'bold',
                fontSize: '20px'
              }}>Need Assistance?</div>
             <div>Feel free to reach out to us at <span style={{color:'#FF7E67'}}>support@manyaa.com</span> or call us at <span style={{color:'#FF7E67'}}>+91-1234567890</span>.</div>
              
              <div>We're here to assist you with anything you may require.</div>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Home