import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import SideBar from '../../Components/SideBar';
import Box from '@mui/material/Box';
import { Container, Stack, Typography, Divider, Button } from '@mui/material';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const FindDoctors = () => {
  return (
    <Box style={{ display: 'flex' }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Container>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',
            backgroundColor: '#A7CDCC',
            padding: '30px',
            borderTopRightRadius: '10px',
            borderTopLeftRadius: '10px'
          }}>
            <Typography
              variant='div'
              sx={{
                textAlign: 'center',
                width: '100%',
                fontSize: '20px',
                color: 'white',
              }}
            >
              Take the Mental State Assessment
            </Typography>
          </Box>
          <Stack sx={{ backgroundColor: '#E2EEEE', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px' }} spacing={2}>
            <Box>
              <Stack spacing='4' sx={{ padding: '30px' }}>
                <Typography variant='div' sx={{ fontSize: '20px', color: '#004A55', fontWeight: 'bold' }}>
                  Important Note:<Typography sx={{ color: '#F87D09' }} variant='span'> Distinguishing Between Sadness and Depression</Typography>
                </Typography>

                <Typography style={{ color: '#333333', marginTop: '20px' }} variant='paragraph'>
                  Sadness is a natural human emotion, but depression is a mental health concern that can impact your thoughts, emotions, and behaviors in profound ways.
                  Take this quiz to help determine if you are experiencing signs of depression.
                </Typography>
              </Stack>
            </Box>
            <Divider sx={{
              backgroundColor: '#A7CDCC',
              height: '2.5px'
            }} />
            <Box>
            <Stack spacing='2' sx={{ padding: '30px' }}>
                <Typography variant='div' sx={{ fontWeight: 'bold', color: '#F87D09', fontSize: '20px' }}>
                  Pre-Assessment Reminders:
                </Typography>

                <ul style={{ margin: '20px 0px' }}>
                  <li> Reflect on the last 2 weeks for accurate self-assessment.</li>
                  <li> Choose the response that resonates with your experiences the most.</li>
                  <li> Remember, there are no right or wrong answers to these questions.</li> 
                  <li> Please answer all questions to receive your assessment results.</li>
                </ul>

                <Typography variant='div' sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <Button sx={{
                    color: 'white',
                    backgroundColor: '#006f80',
                    '&:hover': {
                      backgroundColor: '#004A55',
                    },
                    margin: '0px auto',
                  }}>START ASSESSMENT →</Button>
                </Typography>
                <Typography sx={{ textAlign: 'center', color: '#7BA3A2', fontSize: '8px', margin: '5px 0px' }}>
                  Estimated Time: Approximately 5 Minutes
                </Typography>
            </Stack>
            </Box>
          </Stack>
          <Box style={{textAlign:'end',marginTop:'10px',color:'#004A55',fontSize:'14px'}} variant='div'>
          Does someone you care about show signs of depression?<Typography variant='span' style={{color:'#F87D09'}}> Share this quiz </Typography> to offer support.
          </Box>
        </Container>
      </Box>
    </Box>
  )  
}

export default FindDoctors;
