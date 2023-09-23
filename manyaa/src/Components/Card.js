import React from 'react';
import { Button, Typography } from '@mui/material';
import { Card, CardContent, CardMedia } from '@mui/material';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import axios from 'axios';

const Cards = () => {
  const defaultTheme = createTheme();

  const checkoutHandler = async (amount) => {
    try {
      const { data: { key } } = await axios.get(`${process.env.REACT_APP_BACKEND_ADDRESS}/api/v1/getKey`)
      const { data: { order } } = await axios.post(`${process.env.REACT_APP_BACKEND_ADDRESS}/api/v1/checkout`, {
        amount
      });
      const options = {
        key: key,
        amount: order.amount,
        currency: "INR",
        name: "Bharat Sharma",
        description: "Test Transaction",
        image: "https://avatars.githubusercontent.com/u/97161064?v=4",
        order_id: order.id,
        callback_url: `${process.env.REACT_APP_BACKEND_ADDRESS}/api/v1/paymentVarification`,
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000"
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#3399cc"
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const tiers = [
    {
      title: 'Free',
      price: '0',
      description: [
        '10 users included',
        '2 GB of storage',
        'Help center access',
        'Email support',
      ],
      buttonText: 'Current Plan',
      buttonVariant: 'outlined',
    },
    {
      title: 'Enterprise',
      price: '30',
      description: [
        '50 users included',
        '30 GB of storage',
        'Help center access',
        'Phone & email support',
      ],
      buttonText: 'Upgrade to Pro',
      buttonVariant: 'outlined',
    }
  ];

  return (  
      <Box style={{width:'100%',padding:'100px 40px'}}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
          <Container component="main">
               <Box style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '50px',
                justifyContent: 'space-evenly',
               }}>
              {tiers.map((tier) => (
                  <Card style={{width:'45%'}}>
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: 'center' }}
                      action={tier.title === 'Pro' ? <StarIcon /> : null}
                      subheaderTypographyProps={{
                        align: 'center',
                      }}
                      sx={{
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[700],
                      }}
                    />
                    <CardContent>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'baseline',
                          mb: 2,
                        }}
                      >
                        <Typography component="h2" variant="h3" color="text.primary">
                          ${tier.price}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          /mo
                        </Typography>
                      </Box>
                      <ul>
                        {tier.description.map((line) => (
                          <Typography
                            component="li"
                            variant="subtitle1"
                            align="center"
                            key={line}
                          >
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => checkoutHandler(tier.price)} fullWidth variant={tier.buttonVariant}>
                        {tier.buttonText}
                      </Button>
                    </CardActions>
                  </Card>
              ))}
              </Box>
          </Container>
        </ThemeProvider>
      </Box>
  )
}

export default Cards
