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

const messi = new Footballer("Lionel Messi", 35, ["La Liga", "Ligue 1"], ["FC Barcelona", "Paris Saint-Germain"], "Argentina", "Forward", 1 , "left")

console.log(messi)

function Container(){
    this.footballers = []

    this.add = function(footballer){
        this.footballers.push(footballer)
    }

    this.findName = function(name){
        return this.footballers.find(footballer => footballer.name === name)
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

}