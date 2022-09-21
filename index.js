const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const app = express();

const router = require('./apis')

app.use(cors());
app.use(express.json());
app.use(router);
require('./db/mongodb');
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send({
    message: `it's works`
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
