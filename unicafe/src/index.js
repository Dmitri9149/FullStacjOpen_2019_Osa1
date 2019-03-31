import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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

        <button onClick={handleGoodClick}>
          good
        </button>
        <button onClick={handleNeutralClick}>
          neutral
        </button>
        <button onClick={handleBadClick}>
          bad
        </button>

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
  if (all ==0) {
    return (
      <div>
        Ei yhtään palautetta annettu
      </div>
    )
  }
  return (
    <div>

      <p>hyvä {good}</p>
      <p>neutraali {neutral}</p>
      <p>huono {bad}</p>
      <p>yhteensä {all}</p>
      <p>keskiarvo {(good - bad)/all}</p>
      <p>positiivissa {(good/all)*100} %</p>    
    </div>
  ) 
}

const Heading = ({nimi}) => <h1>{nimi}</h1> 

ReactDOM.render(<App />, 
  document.getElementById('root')
)