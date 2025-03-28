# Group "MINNESOTA"

## Members
- s334062 Merelli Leonardo
- s322215 Pangrazi Federico
- s332085 Stinà Giovanni
- s328202 Pisanu Riccardo

# Exercise "GUESS WHO"

# Lab Journal
- Lab_01(07/03/2025): the chosen topic is Guess who. The domain for the game's items is Football Players because many attributes can be assigned to each item, for example the list of leagues in which he played, his role, the list of teams in which he played, his nationality, if his career is still active or he retired, his age, if he's left or right footed. It should be quite easy to define all the attributes of a player, and the difficulty could also manage the number of items in the grid which have some common attributes with the player to guess(so that guessing is harder because the grid is composed of many players with similar attributes). So, for each footballer, the attributes are:
    - player ID (unique, is his actual name)
    - leagues (array of strings)
    - teams (array of strings)
    - position (string, it can be only GK/DEF/MID/ATT)
    - nationality (string)
    - age (int)
    - active career (boolean)
    - foot (string)


- Lab_02(14/03/2025): we added the methods for adding a new player and for retrieving players(filtering in functional programming) starting from a certain attribute value to the collection and we created our SQLite database with the 5 samples, next step is the exercise 2 of the lab, so create methods to retrieve data from the database using Promises.

EDIT(20/03): exercise 2 done and tested, next step is exercise 3

EDIT(21/03): exercise 3 done, created copy of the database for the testing 
- Lab_03(21/03/2025): created index file for the APIs, divided the file of the previous labs in two files: Models and Dao. Next step is to define the APIs needed:
    - GET </footballers> : retrieve the list of all footballers, in order to build the initial table with all the elements, REQUEST : N/A, RESPONSE : list of the footballers
    - GET </footballers/properties/property>: retrieve the list of footballers that match a specific property, starting from the initial list got from the previous API, REQUEST : property, RESPONSE : list of matching footballers
    -       
