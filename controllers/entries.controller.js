import { _newEntry, _editEntry, _getEntriesForUser, _getRecentEntries } from '../models/entries.models.js';

export const getEntriesForUser = (req, res) => {
    const {userId} = req.params;
    _getEntriesForUser(userId)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}

export const getRecentEntries = (req, res) => {
    const {userId, n} = req.params;
    _getRecentEntries(userId, n)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}

export const newEntry = (req, res) => {
    const { userId, mood, stress } = req.body;
    _newEntry(userId, mood, stress)
    .then(data => {
        res.status(201).json(data);
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}

export const editEntry = (req, res) => {
    const {id} = req.params;
    const { mood, stress } = req.body;
    _editEntry(id, mood, stress)
    .then(data => {
        res.status(201).json(data);
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}