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

const ronaldo = new Footballer("Cristiano Ronaldo", 40, ["Liga Portugal","Premier League","La Liga", "Serie A","Saudi Pro League"], ["Sporting Lisbona", "Manchester United","Real Madrid","Juventus", "Al-Nassr"], "Portugal", "ATT", 1 , "right")
const messi = new Footballer("Lionel Messi", 37, ["La Liga","Ligue 1","MLS"], ["Barcelona", "Paris Saint-Germain","Inter Miami"], "Argentina", "ATT", 1 , "left")
const maldini = new Footballer("Paolo Maldini", 57, ["Serie A"], ["AC Milan"], "Italy", "DEF", 0 , "right")
const zidane = new Footballer("Zinedine Zidane", 53, ["Ligue 1","La Liga","Serie A"], ["Cannes", "Bordeaux", "Juventus", "Real Madrid"], "France", "MID", 0 , "right")
const beckham = new Footballer("David Beckham", 50, ["Premier League","La Liga","Serie A","Ligue 1","MLS"], ["Manchester United", "Real Madrid","AC Milan","Paris Saint-Germain", "LA Galaxy"], "England", "MID", 0 , "right")


function Container(){
    this.footballers = []

    this.add = function(footballer){
        this.footballers.push(footballer)
    }

    this.findName = function(name){
        return this.footballers.find(footballer => footballer.name === name)
    }

    this.findAge = function(age){
        return this.footballers.filter(footballer => footballer.age === age)
    }

    this.findLeagues = function(league){ 
        return this.footballers.filter(footballer => footballer.leagues.includes(league))
    }

    this.findTeam = function(team){ 
        return this.footballers.filter(footballer => footballer.teams.includes(team))
    }

    this.findNationality = function(nationality){
        return this.footballers.filter(footballer => footballer.nationality === nationality)
    }

    this.findPosition = function(position){
        return this.footballers.filter(footballer => footballer.position === position)
    }

    this.findFoot = function(foot){
        return this.footballers.filter(footballer => footballer.foot === foot)
    }

    this.findCareer = function(career){
        return this.footballers.filter(footballer => footballer.career === career)
    }

}


const footballers = new Container()

footballers.add(ronaldo)
footballers.add(messi)
footballers.add(maldini)
footballers.add(zidane)
footballers.add(beckham)

console.log(footballers.findLeagues("La Liga"))