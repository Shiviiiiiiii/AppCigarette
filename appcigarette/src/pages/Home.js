import React, { useState } from 'react';
import DaysCounter from '../components/DaysCounter';
import PointsCounter from '../components/PointsCounter';
import CigaretteCounter from '../components/CigaretteCounter';
import RewardList from '../components/RewardList';
import TimeReset from '../components/TimeReset';

const Home = () => {
  const [days, setDays] = useState(0);
  const [points, setPoints] = useState(0);
  const [cigarettes, setCigarettes] = useState(0);

  const handleCigaretteChange = (change) => {
    setCigarettes(cigarettes + change);
  };

  const handleReset = () => {
    setDays(days + 1);
    setPoints(cigarettes === 0 ? points + 8 : cigarettes === 1 ? points + 4 : cigarettes === 2 ? points + 2 : cigarettes === 3 ? points + 1 : points - (cigarettes - 3));
    setCigarettes(0);
  };

  return (
    <div className="container">
      <div className="main-content">
        <div className="left-content">
          <DaysCounter days={days} />
          <PointsCounter points={points} />
          <CigaretteCounter cigarettes={cigarettes} onChange={handleCigaretteChange} />
          <TimeReset onReset={handleReset} />
        </div>
        <RewardList points={points} setPoints={setPoints} />
      </div>
    </div>
  );
};

export default Home;
