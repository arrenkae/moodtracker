import { db } from '../config/db.js';

export const _getEntriesForUser = (userId) => {
    return db('moodtracker_entries').select('*').where({ user_id: userId }).orderBy('last_update', 'desc');
}

export const _getRecentEntries = (userId, n) => {
    return db('moodtracker_entries').select('*').where({ user_id: userId }).limit(n).orderBy('last_update', 'desc');
}

export const _newEntry = (userId, mood, stress) => {
    return db('moodtracker_entries').insert({
        user_id: userId,
        mood_level: mood,
        stress_level: stress
    }).returning('*');
}

export const _editEntry = (entryId, mood, stress) => {
    return db('moodtracker_entries').update({
        mood_level: mood,
        stress_level: stress
    }).where({ id: entryId }).returning('*');
}