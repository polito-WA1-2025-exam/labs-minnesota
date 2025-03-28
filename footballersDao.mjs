import sqlite from 'sqlite3'
import { Footballer } from './footballers.mjs'

// coonect to database --- REMEMBER TO USE THE COPY OF THE DATABASE
const db = new sqlite.Database('footballersDBLiteCOPY.sqlite', (err) => { if (err) throw err; else console.log('Connected to the database.') })

// return all objects
export const findAll = () => {
    return new Promise((resolve, reject) => {
        // query DB and return an array of all answers to this question
        const sql =
            `SELECT *
            FROM footballers`
        db.all(sql, (err, rows) => {
            if (err) {
                reject(err)
            } else {
                const result = rows.map((item) => new Footballer(item.name, item.age, item.leagues,
                    item.teams, item.nationality, item.position, item.career, item.foot))
                
                resolve(result)
            }
        })
    })
}

// find by Id
export const findId = (id) => {
    return new Promise((resolve, reject) => {
        // query DB and return an array of all answers to this question
        const sql =
            `SELECT *
            FROM footballers
            WHERE Id = ?`

        db.all(sql, [id], (err, rows) => {
            if (err) {
                reject(err)
            } else {
                const result = rows.map((item) => new Footballer(item.name, item.age, item.leagues,
                    item.teams, item.nationality, item.position, item.career, item.foot))

                resolve(result)
            }
        })

    })
}

// find by name
export const findName = (name) => {
    return new Promise((resolve, reject) => {
        // query DB and return an array of all answers to this question
        const sql =
            `SELECT *
            FROM footballers
            WHERE Name = ?`

        db.all(sql, [name], (err, rows) => {
            if (err) {
                reject(err)
            } else {
                const result = rows.map((item) => new Footballer(item.name, item.age, item.leagues,
                    item.teams, item.nationality, item.position, item.career, item.foot))

                resolve(result)
            }
        })

    })
}

// find by age
export const findAge = (age) => {
    return new Promise((resolve, reject) => {
        // query DB and return an array of all answers to this question
        const sql =
            `SELECT *
            FROM footballers 
            WHERE Age = ?`

        db.all(sql, [age], (err, rows) => {
            if (err) {
                reject(err)
            } else {
                const result = rows.map((item) => new Footballer(item.name, item.age, item.leagues,
                    item.teams, item.nationality, item.position, item.career, item.foot))

                resolve(result)
            }
        })

    })
}

// find by league
export const findLeagues = (league) => {
    return new Promise((resolve, reject) => {
        // query DB and return an array of all footballers that played in this league
        const sql =
            `SELECT *
            FROM footballers 
            WHERE EXISTS (SELECT 1 FROM json_each(Leagues) WHERE value = ?)`

        db.all(sql, league, (err, rows) => {
            if (err) {
                reject(err)
            } else {
                const result = rows.map((item) => new Footballer(item.name, item.age, item.leagues,
                    item.teams, item.nationality, item.position, item.career, item.foot))

                resolve(result)
            }
        })

    })
}

// find by team
export const findTeams = (team) => {
    return new Promise((resolve, reject) => {
        // query DB and return an array of all footballers that played for this team
        const sql =
            `SELECT *
            FROM footballers 
            WHERE EXISTS (SELECT 1 FROM json_each(Teams) WHERE value = ?)`
        
        db.all(sql, team, (err, rows) => {
            if (err) {
                reject(err)
            } else {
                const result = rows.map((item) => new Footballer(item.name, item.age, item.leagues,
                    item.teams, item.nationality, item.position, item.career, item.foot))

                resolve(result)
            }
        })

    })
}

// find by nationality
export const findNationality = (nationality) => {
    return new Promise((resolve, reject) => {
        // query DB and return an array of all answers to this question
        const sql =
            `SELECT *
            FROM footballers
            WHERE Nationality = ?`

        db.all(sql, [nationality], (err, rows) => {
            if (err) {
                reject(err)
            } else {
                const result = rows.map((item) => new Footballer(item.name, item.age, item.leagues,
                    item.teams, item.nationality, item.position, item.career, item.foot))

                resolve(result)
            }
        })

    })
}

// find by position
export const findPosition = (position) => {
    return new Promise((resolve, reject) => {
        // query DB and return an array of all answers to this question
        const sql =
            `SELECT *
            FROM footballers
            WHERE Position = ?`

        db.all(sql, [position], (err, rows) => {
            if (err) {
                reject(err)
            } else {
                const result = rows.map((item) => new Footballer(item.name, item.age, item.leagues,
                    item.teams, item.nationality, item.position, item.career, item.foot))

                resolve(result)
            }
        })

    })
}

// find by career
export const findCareer = (career) => {
    return new Promise((resolve, reject) => {
        // query DB and return an array of all answers to this question
        const sql =
            `SELECT *
            FROM footballers
            WHERE Career = ?`

        db.all(sql, [career], (err, rows) => {
            if (err) {
                reject(err)
            } else {
                const result = rows.map((item) => new Footballer(item.name, item.age, item.leagues,
                    item.teams, item.nationality, item.position, item.career, item.foot))

                resolve(result)
            }
        })

    })
}

// find by foot
export const findFoot = (foot) => {
    return new Promise((resolve, reject) => {
        // query DB and return an array of all answers to this question
        const sql =
            `SELECT *
            FROM footballers
            WHERE Foot = ?`

        db.all(sql, [foot], (err, rows) => {
            if (err) {
                reject(err)
            } else {
                const result = rows.map((item) => new Footballer(item.name, item.age, item.leagues,
                    item.teams, item.nationality, item.position, item.career, item.foot))

                resolve(result)
            }
        })

    })
}

// DATA MODIFICATION METHODS

// add
export const addFootballer = (name, age, leagues, teams, nationality, position, career, foot) => {
    return new Promise((resolve, reject) => {
        
        const sql =
            `INSERT INTO footballers (Name, Age, Leagues, Teams, Nationality, Position, Career, Foot)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
        
        const params  = [name, age, leagues, teams, nationality, position, career, foot]

        db.run(sql, params, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(console.log("New footballer added"))
            }
        })
    })
}

// delete
export const deleteFootballer = (name) => {
    return new Promise((resolve, reject) => {

        const sql =
            `DELETE FROM footballers
            WHERE Name = ?`
            db.run(sql, [name], (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(console.log("Footballer deleted"))
            }
        })
    })
}

// update
export const updateFootballer = (name, age, leagues, teams, nationality, position, career, foot) => {
    return new Promise((resolve, reject) => {

        const sql = 
            `UPDATE footballers
            SET Age = ?, Leagues = ?, Teams = ?, Nationality = ?, Position = ?, Career = ?, Foot = ?
            WHERE Name = ?`

        const params = [age, leagues, teams, nationality, position, career, foot, name]
        
            db.run(sql, params, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(console.log("Footballer updated"))
            }
        })
    })
}