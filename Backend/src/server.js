import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import 'dotenv/config'
import contactForm from '../routes/contactForm.js'

const app = express()
const port = process.env.PORT || 3000

app.use(cors({
    origin: ['https://clicks-studio-project-frontend.onrender.com'],
    methods: ['GET', 'POST', 'PUT']
}))
app.use(bodyParser.json())
app.use('/contact-form', contactForm)

const connectDatabase = () => {
    mongoose.connect(`mongodb+srv://${process.env.USERNAME_FOR_DATABASE}:${process.env.PASS_KEY_FOR_DATABASE}@clicksstudioformdata.uvfx6.mongodb.net/`)
        .then(res => console.log('Database connected'))
        .catch(err => console.log(err))
}
connectDatabase()

app.get('/', (req, res) => {
    console.log(`request get... in ${req.url} in ${req.ip}`)
    res.send({
        status: 200,
        message: "Hello world"
    })
})

app.listen(port, () => {
    console.log(`Backend is listening on port: ${port}`)
})
