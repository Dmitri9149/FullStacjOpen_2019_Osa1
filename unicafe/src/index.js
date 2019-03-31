import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BADRESP } from 'dns';

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = ()=> {
    setAll(all + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = ()=> {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = ()=> {
    setAll(all + 1)
    setBad(bad + 1)
  }  


  return (
    <div>

      <Heading nimi = "anna palautetta" />

      <Button 
        handleClick = {handleGoodClick}
        text = "hyvä"
      />
      <Button 
        handleClick = {handleNeutralClick}
        text = "neutraali"
      />
      <Button 
        handleClick = {handleBadClick}
        text = "huono"
      />
      <Heading nimi = "statistiikka" />

      <Statistics 
        good = {good}
        bad = {bad}
        neutral={neutral}
        all={all}
      />

                
    </div>
  )
}

const Statistics = ({good, neutral, bad, all}) => {
  if (all === 0) {
    return (
      <div>
        Ei yhtään palautetta annettu
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <Statistic text = "hyvä " value = {good} />
          <Statistic text = "neutraali " value = {neutral} />
          <Statistic text = "huono " value = {bad} />
          <Statistic text = "yhteensä " value = {all} />
          <Statistic text = "keskiarvo " value = {(good - bad)/all} />
          <Statistic text = "positiivissa " value = {(good/all)*100 + "%"}/>
        </tbody>
      </table>
    </div>
  ) 
}

const Statistic = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Button = ({handleClick, text})=> (
  <button onClick = {handleClick}>
    {text}
  </button>
)


const Heading = ({nimi}) => <h1>{nimi}</h1> 

ReactDOM.render(<App />, 
  document.getElementById('root')
)