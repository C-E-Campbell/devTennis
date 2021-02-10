require('dotenv').config({ path: '.env' });
const { PORT, SESSION_STRING, CONNECTION_STRING } = process.env;
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const test = require('./controllers/testCtrl');
const inventory = require('./controllers/inventoryCtrl');
const auth = require('./controllers/authCtrl');
const user = require('./controllers/userCtrl');
const util = require('./controllers/utilCtrl');

const app = express();

const db = massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
})
  .then((db) => {
    app.set('db', db);
  })
  .then(() => {
    console.log('db connected');
  })
  .catch((err) => console.log(err));
app.use(express.static(`${__dirname}/../build`));
app.use(express.json());

app.use(
  session({
    secret: SESSION_STRING,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 13452345235623623456326435636,
    },
  })
);

app.get('/api/test', test.test);
app.get('/api/inventory', inventory.getAllInventory);
app.get('/api/getcart/:id', inventory.getCart);
app.get('/api/getfavorites/:id', inventory.favorites);

app.post('/api/register', auth.register);
app.post('/api/login', auth.login);
app.post('/api/addtocart', inventory.addToCart);
app.post('/api/charge', util.sendPayment);
app.post('/api/discount', util.sendDiscount);
app.post('/api/receipt', util.sendReceipt);
app.post('/api/addfavorite', inventory.addfavorites);
//app.post("/api/addimage", fileUpload.single("image"), auth.image);

app.put('/api/updateEmail', user.updateEmail);
app.put('/api/updatePass', user.updatePass);
app.put('/api/decreasecart', inventory.decreaseCart);
app.put('/api/deletefavorite', inventory.deleteFavorite);

app.delete('/api/logout', auth.logout);
app.delete('/api/deletecartitem/:id/:user', inventory.deleteItem);
app.delete('/api/deletemyitems/:user_id', inventory.emptyAfterPurchase);

const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, () => console.log(`server running on ${PORT}`));
