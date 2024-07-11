const express = require('express');
const bodyParser= require('body-parser');
const mongoose= require('mongoose');
const routes= require('.\routes');

const app=express();
const PORT=process.env.PORT||3000;
app.use(bodyParser.json());
app.use('/api', routes)
mongoose.connect('mongodb://localhost:27017/blog',{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log('Mongo Connnected'))
.catch(err=>console.log(err))
app.listen(PORT,()=>{
    console.log(`server running ${PORT}`)
});
