import { db } from '../config/db.js';

export const _getUsers = () => {
    return db('moodtracker_users').select('*').orderBy('id');
}

export const _newUser = (username) => {
    return db('moodtracker_users').insert({username}).returning('*');
}

export const _getUserByName = (username) => {
    return db('moodtracker_users').select('*').where({ username: username });
};

export const _getUserById = (userId) => {
    return db('moodtracker_users').select('*').where({ id: userId });
};

export const _deleteUser = (userId) => {
    return db('moodtracker_users').del().where({ id: userId }).returning('*');
}