import React from 'react';
import { Button, Typography } from '@mui/material';
import { Card, CardContent ,CardMedia } from '@mui/material';

const Cards = ({ amount, img, checkoutHandler }) => {      
    return (
        <>
            <Card>
          <CardMedia
            sx={{ 
                height: 300,
                width: 250
            }}
        image={img}
          />
          <CardContent>
            <Typography sx={{textAlign:'center'}} variant="body2">₹{amount}</Typography>
            <Button sx={{width:'100%'}} onClick={() => checkoutHandler(amount)}>Buy Product</Button>
          </CardContent>
        </Card>
        </>
    )
}

export default Cards