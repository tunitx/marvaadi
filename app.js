const express = require("express");
const app = express();
const db = require("./utils/db");

const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const postMemberDetails = require("./routes/list_of_members/postMemberDetails");
const getMemberDetails = require("./routes/list_of_members/getMemberDetails");
const addNewMemberType = require("./routes/list_of_members/addNewMemberType");
const getMemberTypes = require("./routes/list_of_members/getMemberTypes");
const getAvailableMemberType = require("./routes/list_of_members/getAvailableMemberType");

const getAllPress = require("./routes/press/getAllPress");
const getMonthlyPress = require("./routes/press/getMonthlyPress");
const getYearlyPress = require("./routes/press/getYearlyPress");
const getYearsArray = require("./routes/press/getYearsArray");
const postPress = require("./routes/press/postPress");

const post_advertisment = require("./routes/advertisment_board/post_advertisment");
const get_advertisments = require("./routes/advertisment_board/get_advertisments");

const adminSignin = require("./routes/admin/adminSignin");

// admin
app.use(adminSignin);

// list-of-members
app.use(postMemberDetails);
app.use(getMemberDetails);
app.use(addNewMemberType);
app.use(getMemberTypes);
app.use(getAvailableMemberType);

// press
app.use(getAllPress);
app.use(getMonthlyPress);
app.use(getYearlyPress);
app.use(postPress);
app.use(getYearsArray);

// advertisment-board
app.use(get_advertisments);
app.use(post_advertisment);

app.listen(3000, () => {
  console.log(`Server listening at ` + 3000);
});
