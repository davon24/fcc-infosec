const express = require('express');
const app = express();
const helmet = require('helmet');
const frameguard = require('frameguard');
const xXssProtection = require('x-xss-protection');

// enabling helmetjs
app.use(helmet.hidePoweredBy());
app.use(frameguard({ action: 'deny' }));
app.use(xXssProtection());







































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
