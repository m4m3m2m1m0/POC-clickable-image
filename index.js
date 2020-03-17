const express = require("express");
const router = express.Router();
const path = require('path');

const PORT = 3005;
const app = express();


router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/src/webapp/index.html'));
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

