import { _getAllActivities, _addActivitiesToEntry, _getActivitiesForEntry, _getTopActivities } from '../models/activities.models.js';

export const getAllActivities = (req, res) => {
    _getAllActivities()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}

export const addActivitiesToEntry = (req, res) => {
    const { entryId } = req.params;
    const { activities } = req.body;
    _addActivitiesToEntry(entryId, activities)
    .then(data => {
        res.status(201).json(data);
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}

export const getActivitiesForEntry = (req, res) => {
    const { entryId } = req.params;
    _getActivitiesForEntry(entryId)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}

export const getTopActivities = (req, res) => {
    const { userId } = req.params;
    _getTopActivities(userId)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}