import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import SideBar from '../../Components/SideBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { Container,Stack,Divider } from '@mui/material';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Profile = () => {
  const [userData, setUserData] = useState({
    firstName: 'John',
    address: '123 Main St',
    location: 'City, State',
    phone: '123-456-7890',
    email: 'johndoe@example.com',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

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
                padding:'30px',
                borderTopRightRadius:'10px',
                borderTopLeftRadius:'10px'
              }}>
                <Typography sx={{
                  fontSize:'20px',
                  color:'white',
                }} variant="h5">Manage Your Personal Information</Typography>
                <Typography>
                {isEditing ? (
                <Button  sx={{
                  color: 'white',
                  backgroundColor: '#006f80',
                  '&:hover': {
                    backgroundColor: '#004A55',
                  },
                }} variant="contained" color="primary" onClick={handleSaveClick}>
                  <SaveIcon/>
                </Button>
              ) : (
                <Button sx={{
                  color: 'white',
                  backgroundColor: '#006f80',
                  '&:hover': {
                    backgroundColor: '#004A55',
                  },
                }} variant="contained" color="primary" onClick={handleEditClick}> 
                  <EditIcon/>
                </Button>
              )}
                </Typography>
              </Box>
              <div style={{ backgroundColor:'#E2EEEE', borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px'}}>
            <Stack spacing={4} sx={{
              padding:'30px',
            }}>
            <Box sx={{
              display: 'flex',
              width: '30%',
            }}>
              <Typography sx={{marginRight:'20px'}} variant="subtitle1">First Name:</Typography>
              {isEditing ? (
                <TextField
                  
                  name="firstName"
                  value={userData.firstName}
                  onChange={handleInputChange}
                />
              ) : (
                <Typography sx={{fontWeight:'bold',color:'#333333'}}>{userData.firstName}</Typography>
              )}
            </Box>
            <Box sx={{
              display: 'flex',
              width: '30%',
            }}>
              <Typography sx={{marginRight:'20px'}} variant="subtitle1">Address:</Typography>
              {isEditing ? (
                <TextField
                  
                  name="address"
                  value={userData.address}
                  onChange={handleInputChange}
                />
              ) : (
                <Typography sx={{fontWeight:'bold',color:'#333333'}}>{userData.address}</Typography>
              )}
            </Box>
            <Box style={{
              display: 'flex',
              width: '30%',
            }}>
              <Typography sx={{marginRight:'20px'}} variant="subtitle1">Location:</Typography>
              {isEditing ? (
                <TextField
                  
                  name="location"
                  value={userData.location}
                  onChange={handleInputChange}
                />
              ) : (
                <Typography sx={{fontWeight:'bold',color:'#333333'}}>{userData.location}</Typography>
              )}
            </Box>
            </Stack>

            <Divider sx={{
          backgroundColor: '#A7CDCC',
          height: '2.5px'
        }} />

        <Stack spacing={4} sx={{
          padding: '30px',
        }}>
            <Box sx={{
              display: 'flex',
              width: '30%',
            }}>
              <Typography sx={{marginRight:'20px'}} variant="subtitle1">Phone:</Typography>
              {isEditing ? (
                <TextField
                  
                  name="phone"
                  value={userData.phone}
                  onChange={handleInputChange}
                />
              ) : (
                <Typography sx={{fontWeight:'bold',color:'#F87D09'}}>{userData.phone}</Typography>
              )}
            </Box>
            <Box sx={{
              display:'flex',
              width: '30%',
            }}>
              <Typography sx={{marginRight:'20px'}} variant="subtitle1">Email:</Typography>
              {isEditing ? (
                <TextField
                  
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                />
              ) : (
                <Typography sx={{fontWeight:'bold',color:'#F87D09'}}>{userData.email}</Typography>
              )}
            </Box>
            </Stack>
            </div>
         

        </Container>
      </Box>
    </Box>
  )
}

export default Profile