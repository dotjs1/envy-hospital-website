const express=require('express');
const User=require('../models/user');
const routes=express.Router();

routes.post('/patient',async(req,res)=>{
    console.log(req.body);
const {ptname,ptemail,ptnumber,doctorname,dateofappointment}=req.body;
if (!ptname || !ptemail || !ptnumber || !doctorname || !dateofappointment) {
  return res.status(400).json({ error: 'All fields are required' });
} else if (!/^\S+@\S+\.\S+$/.test(ptemail)) {
  return res.status(400).json({ error: 'Email is invalid' });
} else if (ptnumber.toString().length !== 10) {
  return res.status(400).json({ error: 'Mobile number should be 10 digits, This is invalid' });
}
try{
const user=new User({ptname,ptemail,ptnumber,doctorname,dateofappointment});
await user.save();
console.log(user);
res.status(200).json({
  message: 'Appointment booked successfully.',
  patient: {
    name: ptname,
    number: ptnumber,
  },
  doctor: doctorname,
  date: dateofappointment,
  user
});
}catch(error){
    console.error("Signup Error:", error); 
    res.status(500).json({ error: error.message });
}
})

module.exports=routes;