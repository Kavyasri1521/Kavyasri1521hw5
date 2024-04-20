// src/controllers/ActivityController.js

import { useState } from 'react';
import ActivityModel from '../models/ActivityModel';

const ActivityController = () => {
  const [activity, setActivity] = useState('');

  const fetchActivity = async () => {
    try {
      const response = await fetch('https://www.boredapi.com/api/activity');
      const data = await response.json();
      setActivity(data.activity);
    } catch (error) {
      console.error('Error fetching activity:', error);
    }
  };

  return {
    activity,
    fetchActivity,
  };
};

export default ActivityController;
