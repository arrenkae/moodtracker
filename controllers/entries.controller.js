import { _getAllEntries, _getAllUserEntries, _getEntryById, _getEntryByDate, _getRecentEntries, _saveEntry, _deleteEntry } from '../models/entries.models.js';

export const getAllEntries = (req, res) => {
    _getAllEntries()
    .then(data => {
        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ msg: 'No entries found' });
        }
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}

export const getAllUserEntries = (req, res) => {
    const {userId} = req.params;
    _getAllUserEntries(userId)
    .then(data => {
        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ msg: 'No entries for this user' });
        }
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}

export const getEntryById = (req, res) => {
    const {id} = req.params;
    _getEntryById(id)
    .then(data => {
        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ msg: 'Entry not found' });
        }
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}

export const getEntryByDate = (req, res) => {
    const {userId, date} = req.params;
    _getEntryByDate(userId, date)
    .then(data => {
        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ msg: 'Entry not found' });
        }
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}

export const getRecentEntries = (req, res) => {
    const {userId} = req.params;
    _getRecentEntries(userId)
    .then(data => {
        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ msg: 'No entries for this user' });
        }
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}

export const saveEntry = (req, res) => {
    const { userId, mood, stress, activities, date } = req.body; // script.js provides current date in a string format
    _saveEntry( userId, mood, stress, activities, date )
    .then(data => {
        res.status(201).json(data);
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}

export const deleteEntry = (req, res) => {
    const {id} = req.params;
    _deleteEntry(id)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}