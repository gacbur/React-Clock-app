import './App.css';
import React, { useState, useEffect } from 'react';
import LivingData from './components/LivingData'

import QuotesGenerator from './components/QuotesGenerator'

function App() {

  const [LivingDataMoreActive, setLivingDataMoreActive] = useState(false)
  const [DayTime, setDayTime] = useState(true)

  const handleLivingDataMore = () => {
    setLivingDataMoreActive(prevState => !prevState)
  }

  const handleDayTime = () => {
    const hours = new Date().getHours()
    7 <= hours && hours < 18 ? setDayTime(true) : setDayTime(false)
  }

  useEffect(() => {
    handleDayTime()
  }, [])

  return (
    <div className={`Clock-app ${DayTime ? `DayTime` : `NightTime`}`}>
      {LivingDataMoreActive ? null : <QuotesGenerator />}
      <LivingData DayTime={DayTime}
        LivingDataMoreActive={LivingDataMoreActive}
        handleLivingDataMore={handleLivingDataMore} />
    </div>
  );
}

export default App;

