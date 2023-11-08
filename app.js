
const express = require('express');
const app = express();
const db = require('./utils/db');
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const postMemberDetails = require('./routes/postMemberDetails');
const getMemberDetails = require('./routes/getMemberDetails');

app.use(postMemberDetails);
app.use(getMemberDetails);

app.listen(process.env.PORT || 3000 , () => {
  console.log(`Server listening at ` +  process.env.PORT || 3000);
});
