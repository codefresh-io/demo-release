const app = require('express')();
const service =   "2"
app.use((req, res)=>{
  res.send(`service ${service} is avaiable`)
});
const port = 3000;
app.listen(port, (err)=>{
  console.log(`listending on port ${port}`)
})
