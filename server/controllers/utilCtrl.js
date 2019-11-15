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
      html: "<h2 >Use Discount Code: 15%_MoreHappy!</h2>"
    });
  }
  //   sendReciept: async (req, res) => {
  //     const { sendTo, first, last, address, state, city, zip } = req.body;

  //     let transporter = nodemailer.createTransport({
  //       service: "Gmail",
  //       auth: {
  //         user: process.env.NodeEmail,
  //         pass: process.env.NodePass
  //       }
  //     });

  //     await transporter.sendMail({
  //       from: process.env.NodeEmail,
  //       to: sendTo,
  //       subject: "Your DevTennis Reciept: Thank you for your purchase!",
  //       text: "Hello",
  //       html: `<div>
  // 		<h2>Hi, ${first}. Here is your order</h2>
  // 		<div>
  // 		<div>To: ${first} ${last}</div>
  // 		<div>Address: ${address}, ${city}, ${state}, ${zip}</div>
  // 		<div>Cart here:</div>
  // 		</div>
  // 	  </div>`
  //     });
  //   }
};
