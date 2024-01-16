import { _getUsers, _newUser, _getUserByName, _getUserById, _deleteUser } from '../models/users.models.js';

export const getUsers = (req, res) => {
    _getUsers()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}

export const newUser = (req, res) => {
    const { username } = req.body;
    _newUser(username)
    .then((data) => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(404).json({ msg: err.message })
    })
}

export const getUserById = (req, res) => {
    const {id} = req.params;
    _getUserById(id)
    .then(data => {
        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ msg: 'User not found' });
        }
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
};

export const getUserByName = (req, res) => {
    const {username} = req.params;
    _getUserByName(username)
    .then(data => {
        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ msg: 'User not found' });
        }
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
};

export const deleteUser = (req, res) => {
    const {id} = req.params;
    _deleteUser(id)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}