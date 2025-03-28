import express from 'express'
import morgan from 'morgan'
import { findAll, findId, findName, findAge, findLeagues, findTeam, findNationality, findCareer, findFoot, findPosition, addFootballer, deleteFootballer, updateFootballer } from './footballersDao.mjs'

const app = express()

app.use(express.json())
app.use(morgan('dev'))


// Activate server
app.listen(3000, () =>	console.log('Server	ready'))


// RETRIEVE METHODS - THESE METHODS SHOULD RETURN A LIST OF ITEMS

// return all objects
app.get('/footballers', (req, res) => {
    findAll().then(result => res.json(result))
})

// find by Id
app.get('/footballers/properties/:id', (req, res) => {
    findId(req.params.id).then(result => res.json(result))
})

// find by name
app.get('/footballers/properties/:name', (req, res) => {
    findName(req.params.name).then(result => res.json(result))
})

// find by age
app.get('/footballers/properties/age', (req, res) => {
    findAge(req.params.age).then((result) => {res.json(result)})
})

// find by leagues
app.get('/footballers/properties/leagues', (req, res) => {
    findLeagues(req.params.league).then((result) => {res.json(result)})
})

// find by team
app.get('/footballers/properties/team', (req, res) => {
    findTeam(req.params.team).then((result) => {res.json(result)})
})

// find by nationality
app.get('/footballers/properties/nationality', (req, res) => {
    findNationality(req.params.nationality).then((result) => {res.json(result)})
})

// find by career
app.get('/footballers/properties/career', (req, res) => {
    findCareer(req.params.career).then((result) => {res.json(result)})
})

// find by foot
app.get('/footballers/properties/foot', (req, res) => {
    findFoot(req.params.foot).then((result) => {res.json(result)})
})

// find by position
app.get('/footballers/properties/position', (req, res) => {
    findPosition(req.params.position).then((result) => {res.json(result)})
})

// CRUD METHODS 

app.post('/footballers/create', (req, res) => {
    addFootballer(req.body.name, req.body.age, req.body.leagues, req.body.teams, req.body.nationality, req.body.position, req.body.career, req.body.foot).then(() => res.sendStatus(200))
})

app.put('/footballers/update', (req, res) => {
    updateFootballer(req.body.name, req.body.age, req.body.leagues, req.body.teams, req.body.nationality, req.body.position, req.body.career, req.body.foot).then(() => res.sendStatus(200))
})

app.delete('/footballers/delete', (req, res) => {
    deleteFootballer(req.body.name).then(() => res.sendStatus(200))
})