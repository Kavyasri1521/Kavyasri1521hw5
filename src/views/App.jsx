// src/views/App.jsx

import React from 'react';
import ActivityController from '../controllers/ActivityController';

const App = () => {
  const { activity, fetchActivity } = ActivityController();

  const handleNewActivity = () => {
    fetchActivity();
  };

  return (
    <div className='project' style={{textAlign:"center"}}>
      <h2>What to Do Next?</h2>
      <p>{activity}</p>
      <button onClick={handleNewActivity}>Get New Activity</button>
    </div>
  );
};

export default App;
