import express from 'express'
import 'dotenv/config'

const app = express()

const port = process.env.PORT

app.get('/',(req, res)=>{
    res.send('Hello world')
})

app.listen(port, ()=>{
    console.log(`Backend is listening on port: ${port}`)
})