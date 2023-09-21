import React from 'react';
import { useSearchParams } from "react-router-dom";
import { Container, Typography } from '@mui/material';

const PaymentSuccess = () => {
    const seachQuery = useSearchParams()[0];
    const referenceNum = seachQuery.get("reference");
  return (
    <Container sx={{
       fontWeight: 'bold',
        fontSize: '2.5rem',
        textAlign: 'center',
        marginTop: '250px',
    }}> 
       Order no. <Typography sx={{
        color: 'green',
       }}>{referenceNum} successfull </Typography>
    </Container>
  )
}

export default PaymentSuccess