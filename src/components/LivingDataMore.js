import React from 'react';


const LivingDataMore = ({ TimeExpandedInfo, DayTime }) => {

    const { timezone, day_of_year, day_of_week, week_number } = TimeExpandedInfo

    return (
        <div className={`section-livingdatamore ${DayTime ? 'DayTime' : 'NightTime'}`}>
            <div className="livingdatamore-left">
                <div className="timezoneinfo-control">
                    <h4 className={`${DayTime ? 'DayTime' : 'NightTime'}`}>CURRENT TIMEZONE</h4>
                    <h2 className={`${DayTime ? 'DayTime' : 'NightTime'}`}>{timezone}</h2>
                </div>
                <div className="timezoneinfo-control">
                    <h4 className={`${DayTime ? 'DayTime' : 'NightTime'}`}>DAY OF THE YEAR</h4>
                    <h2 className={`${DayTime ? 'DayTime' : 'NightTime'}`}>{day_of_year}</h2>
                </div>
            </div>
            <div className="livingdatamore-right">
                <div className="timezoneinfo-control">
                    <h4 className={`${DayTime ? 'DayTime' : 'NightTime'}`}>DAY OF THE WEEK</h4>
                    <h2 className={`${DayTime ? 'DayTime' : 'NightTime'}`}>{day_of_week}</h2>
                </div>
                <div className="timezoneinfo-control">
                    <h4 className={`${DayTime ? 'DayTime' : 'NightTime'}`}>WEEK NUMBER</h4>
                    <h2 className={`${DayTime ? 'DayTime' : 'NightTime'}`}>{week_number}</h2>
                </div>
            </div>
        </div>
    );
}

export default LivingDataMore;