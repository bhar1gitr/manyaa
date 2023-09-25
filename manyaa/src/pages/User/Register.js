import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';

const theme = createTheme();

export default function Register() {

  const [signupButton, setSignupButton] = useState(false);
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [otpText,setOtpText] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpLoading,setOtpLoading] = useState(false);

  const sendOTP = () => {
    setLoading(true);
    // http://localhost:4000
    axios.post(`process.env/send-otp`, { email })
      .then((response) => {
        toast.success(response.data.message);
        setOtpText(true);
      })
      .catch((error) => {
        toast.error('Failed to send OTP.');
      }).finally(()=>{
        setLoading(false);
      })
  };
  const verifyOTP = () => {
    setOtpLoading(true);
    axios.post('http://localhost:4000/verify-otp', { email, otp })
      .then((response) => {
        toast.success(response.data.message);
        setSignupButton(true);
      })
      .catch((error) => {
        // setMessage('Invalid OTP.');
        toast.error('Failed to verify OTP.');
      }).finally(()=>{
        setOtpLoading(false);
        setOtpText(false);
      })
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 6,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <TextField
                  style={{width: '68%'}}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                  <Button
                    variant="contained"
                    onClick={sendOTP}
                    style={{
                      width: '30%'
                    }}>Send Otp
                     { loading && <CircularProgress size={20} style={{color:'white',marginLeft:'5px'}}/> }
                    </Button>
                </Box>
              </Grid>
              <Grid item xs={12}>
                { 
                  otpText 
                  && 
                  <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <TextField
                  style={{width: '68%'}}
                  required
                  fullWidth
                    id="email"
                    label="OTP"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                   /> 
                   <Button
                    variant="contained"
                    style={{
                      width: '30%'
                    }}
                    onClick={verifyOTP}>
                    verify
                    { otpLoading && <CircularProgress size={20} style={{color:'white',marginLeft:'5px'}}/> }
                   </Button>
                  </Box>
                }
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  type="phone"
                  id="phone"
                  autoComplete="new-phone"
                />
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
           { signupButton ?  <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button> :  <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
