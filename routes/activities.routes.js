import express from 'express';
import { getAllActivities, addActivitiesToEntry, getActivitiesForEntry, getTopActivities } from '../controllers/activities.controller.js';

export const activities_router = express.Router();

activities_router.get('/', getAllActivities);
activities_router.post('/:entryId', addActivitiesToEntry);
activities_router.get('/:entryId', getActivitiesForEntry);
activities_router.get('/top/:userId', getTopActivities);
// activities_router.get('/top_negative/:userId', getTopNegative);