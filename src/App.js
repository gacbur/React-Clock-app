import './App.css';
import React, { useState } from 'react';
import LivingData from './components/LivingData'

import QuotesGenerator from './components/QuotesGenerator'

function App() {

  const [LivingDataMoreActive, setLivingDataMoreActive] = useState(false)

  const handleLivingDataMore = () => {
    setLivingDataMoreActive(prevState => !prevState)
  }

  return (
    <div className="Clock-app">
      {LivingDataMoreActive ? null : <QuotesGenerator />}
      <LivingData
        LivingDataMoreActive={LivingDataMoreActive}
        handleLivingDataMore={handleLivingDataMore} />
    </div>
  );
}

export default App;

