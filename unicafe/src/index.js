import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <Heading nimi = "anna palautetta" />

        <button onClick={() => setGood(good + 1)}>
          good
        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
          neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>
          bad
        </button>

        <Heading nimi = "statistiikka" />

        <p>hyvä {good}</p>
        <p>neutraali {neutral}</p>
        <p>huono {bad}</p>
                
    </div>
  )
}

const Heading = ({nimi}) => <h1>{nimi}</h1> 



  

ReactDOM.render(<App />, 
  document.getElementById('root')
)