import React from 'react';
import { styled, useTheme } from '@mui/material/styles'; 
import SideBar from '../../Components/SideBar/SideBar';
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

const RatingsReviews = () => {
  return (
    <Box style={{display:'flex'}}>
    <SideBar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
     {/*   const checkoutHandler = async (amount) => {
    try {
      const {data:{key}} = await axios.get('http://localhost:4000/api/v1/getKey')
      console.log(amount);
      const {data:{order}} = await axios.post('http://localhost:4000/api/v1/checkout', {
        amount
      });

      console.log(order);

      const options = {
        key: key, 
        amount: order.amount,
        currency: "INR",
        name: "Bharat Sharma",
        description: "Test Transaction",
        image: "https://avatars.githubusercontent.com/u/97161064?v=4",
        order_id: order.id,
        callback_url: "https://localhost:4000/api/v1/paymentVarification",
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
        }
    };
    // const razor = new window.Razorpay(options);
      // razor.open();

    } catch (error) {
      console.error('Error:', error);
    }
  }; */}
    </Box>
  </Box>
  )
}

export default RatingsReviews