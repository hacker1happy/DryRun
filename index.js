const express = require("express");
const app = express();

app.set('views engine','ejs');
app.use(express.static('public'))
app.get('/', async(req,res)=>{
   const link ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtT7VWUnR48hinUbRQMl5yu2EqYH6nIB3pDQ&usqp=CAU"
   res.render('index.ejs',{link});
   
})
app.get('/home', async(req,res)=>{
    res.render('index.ejs');      
   })
app.get('/about', async(req,res)=>{
    res.render('about.ejs');      
   })

app.get('/bubble', async(req,res)=>{
    res.render('bubble.ejs');
      
   })
app.listen(3000,()=>{
    console.log("listening on port 3000!")
})