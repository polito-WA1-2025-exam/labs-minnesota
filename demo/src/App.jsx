import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import FootballerDisplay from './components/Footballer.jsx'
import Footer from './components/Footer.jsx'
import Footballer from './models/footballersModels.mjs'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const fakeFootballers = []
  fakeFootballers.push(new Footballer("Khéphren Thuram", 24, ["Ligue 1", "Serie A"], ["Monaco", "Nice", "Juventus"], "France", "MID", 1, "Right"))
  fakeFootballers.push(new Footballer("Joao Felix", 25, ["La Liga","Premier League","Serie A", "Liga Portugal"], ["Benfica", "Atlético Madrid", "Barcellona","Chelsea", "Milan"], "Portugal", "ATT", 1, "Right"))
  fakeFootballers.push(new Footballer("Thomas Muller", 37, ["Bundesliga"], ["Bayern Munich"], "Germany", "ATT", 0, "Right"))

  const [footballers, setFootballers] = useState(fakeFootballers)
  return (<>
    <Header/>
    <FootballerDisplay footballers={footballers}/>
    <Footer/>
  </>)
}

export default App
