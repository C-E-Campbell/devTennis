require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE);
const nodemailer = require("nodemailer");
module.exports = {
  sendPayment: async (req, res) => {
    try {
      const { amount, currency, description, source } = req.body;
      let { status } = await stripe.charges.create({
        amount,
        currency,
        description,
        source
      });

      res.json({ status });
    } catch (err) {
      console.log(err);
      res.status(501).end();
    }
  },
  sendDiscount: async (req, res) => {
    const { sendTo } = req.body;

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.NodeEmail,
        pass: process.env.NodePass
      }
    });

    await transporter.sendMail({
      from: process.env.NodeEmail,
      to: sendTo,
      subject: "Your DevTennis Discount",
      text: "Hello",
      html: `<body>
         
         <ul style='list-style: none; padding: 0px; font-size: 18px; color: #333, font-family: san-serif'>
             <li><h3>Hi, ${sendTo}</h3></li>
             <li><h3>Use Discount Code: 15%_MoreHappy!</h3></li>
            
         </ul>
         <body>`
    });
    res.send("it worked");
  },
  sendReceipt: async (req, res) => {
    const {
      sendTo,
      first,
      last,
      address,
      state,
      city,
      zip,
      amount,
      cart
    } = req.body;

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.NodeEmail,
        pass: process.env.NodePass
      }
    });

    await transporter.sendMail({
      from: process.env.NodeEmail,
      to: sendTo,
      subject: "Your DevTennis Reciept: Thank you for your purchase!",
      text: "Hello",
      html: `<div font-size: 18px; color: #333, font-family: san-serif'>
    		<h2 font-size: 18px; color: #333, font-family: san-serif>Hi, ${first}. Here is your receipt</h2>
    		
    		<div color: #333, font-family: san-serif>To: ${first} ${last}</div>
        <div>
        <div color: #333, font-family: san-serif>Address:</div>
          
            <p color: #333, font-family: san-serif>${address}</p>
            <p color: #333, font-family: san-serif>${city}</p>
            <p color: #333, font-family: san-serif>${state}</p>
            <p color: #333, font-family: san-serif>${zip}</p>
         
        </div>
        <div font-size: 16px, color: #333, font-family: san-serif>Total Amount ${amount.toFixed(
          2
        )}</div>
        <div><h3>Order#: 45-F_glktennis</h3></div>
    		
    	  </div>`
    });
    res.send("it worked");
  }
};
