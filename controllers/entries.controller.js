import { _saveEntry, _getEntriesForUser, _getEntryToday, _getRecentEntries } from '../models/entries.models.js';

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

export const getEntryToday = (req, res) => {
    const {userId} = req.params;
    _getEntryToday(userId)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}

export const getRecentEntries = (req, res) => {
    const {userId} = req.params;
    _getRecentEntries(userId)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}

export const saveEntry = (req, res) => {
    const { userId, mood, stress, activities } = req.body;
    _saveEntry(userId, mood, stress, activities)
    .then(data => {
        res.status(201).json(data);
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}