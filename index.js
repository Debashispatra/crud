const app = require('./server/server');


const port = process.env.PORT || 8000

app.listen(port,()=>{
    console.log(`server started: ${port}`)
})


