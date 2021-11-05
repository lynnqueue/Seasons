import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const text = season === 'summer' ? 'Lets hit the beach!' : 'Burr, its chilly!';
  const icon =  season === 'summer' ? 'sun' : 'snowflake';

  return (
       <div>
         <i className={`${icon} icon`} />
         <h1>{text}</h1>
         <i className={`${icon} icon`} />
       </div> 
  ); 
};

export default SeasonDisplay;
