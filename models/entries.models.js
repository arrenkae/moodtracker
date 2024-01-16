import { db } from '../config/db.js';

export const _getEntryById = (entryId) => {
    return db('moodtracker_entries').select('*').where({ id: entryId });
}

export const _getEntryByDate = (userId, date) => {
    return db('moodtracker_entries').select('*').where({ user_id: userId }).where({ created_on: date });
}

export const _getRecentEntries = (userId) => {
    return db('moodtracker_entries').select('*').where({ user_id: userId }).limit(7).orderBy('created_on', 'desc');
}

export const _saveEntry = (userId, mood, stress, activities, date ) => {
    return db('moodtracker_entries').insert({
        user_id: userId,
        mood_level: mood,
        stress_level: stress,
        activities,
        created_on: date
    })
    .onConflict(['user_id', 'created_on'])
    .merge()
    .returning('*');
}