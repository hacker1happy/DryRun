const express = require("express");
const app = express();

app.set('views engine','ejs');
app.use(express.static('public'))

app.get('/', async(req,res)=>{
   res.render('index.ejs'); 
})
app.get('/home', async(req,res)=>{
    res.render('index.ejs');      
   })
// app.get('/about', async(req,res)=>{
//     res.render('about.ejs');      
//    })

app.get('/bubble', async(req,res)=>{
    res.render('bubble.ejs');
      
   })
app.get('/result', async(req,res)=>{
    res.render('result.ejs');
      
   })
app.listen(3000,()=>{
    console.log("listening on port 3000!")
})