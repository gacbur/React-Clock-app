import React from 'react';

const LivingDataMore = ({ TimeExpandedInfo }) => {

    const { timezone, day_of_year, day_of_week, week_number } = TimeExpandedInfo

    return (
        <div className="section-livingdatamore">
            <div className="livingdatamore-left">
                <div className="timezoneinfo-control">
                    <h4>CURRENT TIMEZONE</h4>
                    <h2>{timezone}</h2>
                </div>
                <div className="timezoneinfo-control">
                    <h4>DAY OF THE YEAR</h4>
                    <h2>{day_of_year}</h2>
                </div>
            </div>
            <div className="livingdatamore-right">
                <div className="timezoneinfo-control">
                    <h4>DAY OF THE WEEK</h4>
                    <h2>{day_of_week}</h2>
                </div>
                <div className="timezoneinfo-control">
                    <h4>WEEK NUMBER</h4>
                    <h2>{week_number}</h2>
                </div>
            </div>
        </div>
    );
}

export default LivingDataMore;