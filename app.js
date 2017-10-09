const express = require('express');
const app = express();

require('./app/config')(app);

app.listen(app.get('port'), () => {
  console.log(`Blue Hunter app listening in port: ${app.get('port')}`);
});