const app = require('./app.js')
const port = process.env.Port || 5000
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})