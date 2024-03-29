const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./Routes/user"); 

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

//connect to MongoDB
mongoose.connect("mongodb+srv://phooda938:phooda938@cluster0.kof5uvs.mongodb.net/", {useNewUrlParser: true, useUnifiedTopology: true} )

app.listen(3000, () => console.log('Server running on port 3000'));
