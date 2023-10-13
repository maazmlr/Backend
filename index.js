import express from 'express';

const PORT=3000; 
const app =express()

// for  data reading 
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("ja")
})


app.listen(PORT,()=>{
    console.log('port is' ,PORT)
})