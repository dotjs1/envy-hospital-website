require('dotenv').config();
const express=require('express');
const cors=require('cors');
const PORT=process.env.PORT||5000;
const app=express();
app.use(cors());
app.use(express.json());
const connectDb=require('./db');
const routesget=require('./routes/doctor');
const routespost=require('./routes/appointment');
connectDb();
app.use('/api/user',routesget);
app.use('/api/user',routespost);
app.listen(PORT, '0.0.0.0', () => {
  console.log(`server is running on ${PORT}`);
});