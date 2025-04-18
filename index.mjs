import express from 'express'
import morgan from 'morgan'
import { findAll, findId, findName, findAge, findLeagues, findTeams, findNationality, findCareer, findFoot, findPosition, addFootballer, deleteFootballer, updateFootballer } from './footballersDao.mjs'

const app = express()

app.use(express.json())
app.use(morgan('dev'))


// Activate server
app.listen(3000, () =>	console.log('Server	ready'))

// MIDDLEWARES TO VALIDATE INPUTS

// numeric Id
const validateId = (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid ID' });
    }
    next();
};

// strings
const validateString = (param) => (req, res, next) => {
    if (!req.params[param] || typeof req.params[param] !== 'string') {
        return res.status(400).json({ error: `Invalid ${param}` });
    }
    next();
};


// RETRIEVE METHODS - THESE METHODS SHOULD RETURN A LIST OF ITEMS OR SINGLE ITEMS

// return all objects
app.get('/footballers', (req, res) => {
    findAll().then(result => res.json(result))
})

// find by Id
app.get('/footballers/properties/:id', validateId, (req, res) => {
    findId(req.params.id).then(result => res.json(result))
})

// find by name
app.get('/footballers/properties/name/:name', validateString("name"), (req, res) => {
    findName(req.params.name).then(result => res.json(result))
})

// find by age
app.get('/footballers/properties/age/:age', validateString("age"), (req, res) => {
    findAge(req.params.age).then((result) => {res.json(result)})
})

// find by leagues
app.get('/footballers/properties/leagues/:league', validateString("league"), (req, res) => {
    findLeagues(req.params.league).then((result) => {res.json(result)})
})

// find by team
app.get('/footballers/properties/teams/:team', validateString("team"),(req, res) => {
    findTeams(req.params.team).then((result) => {res.json(result)})
})

// find by nationality
app.get('/footballers/properties/nationality/:nationality', validateString("nationality"),(req, res) => {
    findNationality(req.params.nationality).then((result) => {res.json(result)})
})

// find by career
app.get('/footballers/properties/career/:career', validateString("nareer"),(req, res) => {
    findCareer(req.params.career).then((result) => {res.json(result)})
})

// find by foot
app.get('/footballers/properties/foot/:foot', validateString("foot"),(req, res) => {
    findFoot(req.params.foot).then((result) => {res.json(result)})
})

// find by position
app.get('/footballers/properties/position/:position', validateString("position"), (req, res) => {
    findPosition(req.params.position).then((result) => {res.json(result)})
})

// CRUD METHODS 

// add a new footballer
app.post('/footballers', (req, res) => {
    addFootballer(req.body.name, req.body.age, req.body.leagues, req.body.teams, req.body.nationality, req.body.position, req.body.career, req.body.foot).then(() => res.sendStatus(200))
})

// update footballer given his ID
app.put('/footballers/:id', (req, res) => {
    updateFootballer(req.body.name, req.body.age, req.body.leagues, req.body.teams, req.body.nationality, req.body.position, req.body.career, req.body.foot).then(() => res.sendStatus(200))
})

// delete footballer given his ID
app.delete('/footballers/:id', (req, res) => {
    deleteFootballer(req.params.id).then(() => res.sendStatus(200))
})