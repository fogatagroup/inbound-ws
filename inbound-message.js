
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/webhooks/inbound-message', (req, res) => {
  console.log(req.body);
  res.status(200).end();
});

app.listen(PORT, () => {
    console.log('Our app is running on port '+PORT);
});
