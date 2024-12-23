const express = require('express');
const app = express();
const PORT = 5001;

app.get('/', (req, res) => {
  let prodData = {
    pName: 'Jackets',
    price: 45,
    img: 'shop-1.jpg',
  };
  res.status(200).send(prodData);
});

const server = app.listen(PORT, () => {
  console.log('App is running on the port - 5001');
});
