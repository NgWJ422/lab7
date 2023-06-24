const express = require('express')
const mongoose = require('mongoose')
const Visitor = require('./visitor_recordschema')
const app = express()

app.use(express.json())

var url = 'mongodb+srv://jng010422:f6c2e57f6bB.@vms.ymnvlkt.mongodb.net/hotel';

mongoose.connect(url)
.then(()=>{
    console.log('connected to mongodb')
    app.listen(3000,() => {
        console.log('Node Api is running on port 3000')
    })
}).catch((error)=>{
    console.log(error)
})

app.get('/',(req,res)=>{
    res.send('hello node api')
})

app.post('/record', async(req, res) => {
    try {
          const v = await Visitor.create(req.body)
          res.status(200).json(v)
   
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//read all document
//cannot filter document
app.get('/readall',async(req,res)=>{
    try {
        const all = await Visitor.find()
        res.status(200).json(all);
     
      } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})}
})

//read doc based on id in url
app.get('/readone/:id',async(req,res)=>{
    try {
        const all = await Visitor.find({_id:req.params.id})
        res.status(200).json(all);
      } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})}
})

//can read filter documents based on req.body
app.post('/read/filter',async(req,res)=>{
    try {
        const allv = await Visitor.find(req.body)
        res.status(200).json(allv);
      } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})}
})

//update a doc based on id in url
app.patch('/update/:id',async(req,res)=>{
    try {
        const a = await Visitor.updateOne({_id: req.params.id},{$set: req.body})
        res.status(200).json(a);
      } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})}

})

//delete a doc based on id in url
app.delete('/delete/:id',async(req,res)=>{
    try {
        await Visitor.deleteOne({_id: req.params.id})
        .then(result=>{
        res.status(200).json(result)
        })
      } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})}
})
  
app.delete('/filter/delete',async(req,res)=>{
    try {
        await Visitor.deleteMany(req.body)
        .then(result=>{
        res.status(200).json(result)
        })
      } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})}
})
  

