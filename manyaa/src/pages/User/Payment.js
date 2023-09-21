import React from 'react';
import { styled, } from '@mui/material/styles'; 
import SideBar from '../../Components/SideBar';
import {Box,Stack} from '@mui/material';
import Card from "../../Components/Card";
import axios from 'axios';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
const Payment = () => {

  const checkoutHandler = async (amount) => {
    try {
      const {data:{key}} = await axios.get('REACT_APP_BACKEND_ADDRESS/api/v1/getKey')
      const {data:{order}} = await axios.post('REACT_APP_BACKEND_ADDRESS/api/v1/checkout', {
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
        callback_url: "REACT_APP_BACKEND_ADDRESS/api/v1/paymentVarification",
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
  
  return (
    <Box style={{display:'flex'}}>
    <SideBar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
     <Box>
     <Box>
      <Stack h={"100vh"} direction='row' spacing={2}>
        <Card amount={5000} img={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"} checkoutHandler={checkoutHandler} />
        <Card amount={3000} img={"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"} checkoutHandler={checkoutHandler} />
      </Stack>
      </Box>
     </Box>
    </Box>
  </Box>
  )
}

export default Payment
