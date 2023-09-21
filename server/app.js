const express = require('express');
const dotenv = require('dotenv')
const app = express();
const cors = require('cors');
const Razorpay = require('razorpay')
const crypto = require('crypto');

dotenv.config({path:'./config/config.env'})
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// Importing routes 

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

app.get('/api/v1/getKey',(req,res)=>{
    res.status(200).json({
        key:process.env.RAZORPAY_API_KEY
    });
})

app.post('/api/v1/checkout', async (req, res) => {
    const options = {
        amount: req.body.amount * 100, 
        currency: "INR",
      };
    const order = await  instance.orders.create(options);
      res.status(200).json({
          success:true,
          order
      })
})

app.post('/api/v1/paymentVarification', async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
        .update(body.toString())
        .digest("hex");
    const isAuthentic = expectedSignature === razorpay_signature;
    if (isAuthentic) {
        res.redirect(`${process.env.REACT_APP_FRONTEND_ADDRESS}/paymentsuccess?reference=${razorpay_payment_id}`);
    } else {
        res.status(400).json({
            success: false,
            message: "Payment verification failed.",
        });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
})
