import sqlite from 'sqlite3'

function Footballer(name, age, leagues, teams, nationality, position, career, foot) {
    this.name = name
    this.age = age
    this.leagues = leagues
    this.teams = teams
    this.nationality = nationality
    this.position = position
    this.career = career
    this.foot = foot
    
}

// const ronaldo = new Footballer("Cristiano Ronaldo", 40, ["Liga Portugal","Premier League","La Liga", "Serie A","Saudi Pro League"], ["Sporting Lisbona", "Manchester United","Real Madrid","Juventus", "Al-Nassr"], "Portugal", "ATT", 1 , "right")
// const messi = new Footballer("Lionel Messi", 37, ["La Liga","Ligue 1","MLS"], ["Barcelona", "Paris Saint-Germain","Inter Miami"], "Argentina", "ATT", 1 , "left")
// const maldini = new Footballer("Paolo Maldini", 57, ["Serie A"], ["AC Milan"], "Italy", "DEF", 0 , "right")
// const zidane = new Footballer("Zinedine Zidane", 53, ["Ligue 1","La Liga","Serie A"], ["Cannes", "Bordeaux", "Juventus", "Real Madrid"], "France", "MID", 0 , "right")
// const beckham = new Footballer("David Beckham", 50, ["Premier League","La Liga","Serie A","Ligue 1","MLS"], ["Manchester United", "Real Madrid","AC Milan","Paris Saint-Germain", "LA Galaxy"], "England", "MID", 0 , "right")

const db = new sqlite.Database('footballersDBLite.sqlite', (err) => { if (err) throw err; else console.log('Connected to the database.') })

function Container(){

    ///////////////////////             LAB 01           ////////////////////////
    // this.footballers = []

    // this.add = function(footballer){
    //     this.footballers.push(footballer)
    // }

    // this.findName = function(name){
    //     return this.footballers.find(footballer => footballer.name === name)
    // }

    // this.findAge = function(age){
    //     return this.footballers.filter(footballer => footballer.age === age)
    // }

    // this.findLeagues = function(league){ 
    //     return this.footballers.filter(footballer => footballer.leagues.includes(league))
    // }

    // this.findTeam = function(team){ 
    //     return this.footballers.filter(footballer => footballer.teams.includes(team))
    // }

    // this.findNationality = function(nationality){
    //     return this.footballers.filter(footballer => footballer.nationality === nationality)
    // }

    // this.findPosition = function(position){
    //     return this.footballers.filter(footballer => footballer.position === position)
    // }

    // this.findFoot = function(foot){
    //     return this.footballers.filter(footballer => footballer.foot === foot)
    // }

    // this.findCareer = function(career){
    //     return this.footballers.filter(footballer => footballer.career === career)
    // }

    /////////////////////////             LAB 02              //////////////////////

    // NAME
    this.findName = (name) => {
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

    // AGE
    this.findAge = (age) => {
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

    // LEAGUES
    this.findLeagues = (league) => {
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

    // TEAMS
    this.findTeams = (team) => {
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

    // NATIONALITY
    this.findNationality = (nationality) => {
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

    // POSITION
    this.findPosition = (position) => {
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

    // CAREER   
    this.findCareer = (career) => {
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

    // FOOT
    this.findFoot = (foot) => {
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

    
}


// testing

const cl = new Container()
cl.findTeams("AC Milan")
    .then((list) => { console.log('We have ', list.length, ' footballers') })
    .catch((err) => { console.log("ERROR: ", err) })


