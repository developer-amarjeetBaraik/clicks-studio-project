import express from 'express'
import emailjs from '@emailjs/nodejs';
import { FormData } from '../schema/contactFormDataSchema.js';
import 'dotenv/config';

const router = express.Router()

router.post('/', (req, res) => {
    console.log('req get..')
    const { name, phone, email, service, budget } = req.body

    const templateParams = {
        name: name,
        phone: phone,
        email: email,
        service: service,
        budget: budget,
    }

    emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams, {
        publicKey: process.env.PUBLIC_KEY_FOR_EMAIL,
        privateKey: process.env.PRIVATE_KEY_FOR_EMAIL,
    }).then((response) => {
        const newFormData = new FormData(templateParams)
        try {
            newFormData.save()
        } catch (error) {
            console.log(error)
        }
        res.send({
            status: 200,
            message: 'Data sent successfully.'
        })
    })
        .catch((err) => {
            res.send({
                status: 403,
                message: 'Something went wrong.'
            })
        })

})

export default router;