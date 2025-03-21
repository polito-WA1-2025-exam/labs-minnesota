import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

// define routes and web pages
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user', (req, res) => {
    let u = {'name': 'FSK', id: 1}
    res.json(u)
})

app.post('/user', (req, res) => {
    console.log(req.body)
    res.end()
})

// Activate server
app.listen(3000, () =>	console.log('Server	ready'))