import { _getUsers, _newUser, _getUserByName, _getUserById } from '../models/users.models.js';

export const getUsers = (req, res) => {
    _getUsers()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(404).json({ msg: err.message });
    })
}

export const login = (req, res) => {
    const { username } = req.body;
    _getUserByName(username)
    .then((data) => {
        if(data.length > 0) {
            res.status(200).json(data)
        } else {
            _newUser(username)
            .then((data) => {
                res.status(200).json(data)
            })
        }
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