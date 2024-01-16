import { db } from '../config/db.js';

export const _getEntriesForUser = (userId) => {
    return db('moodtracker_entries').select('*').where({ user_id: userId }).orderBy('created_on', 'desc');
}

export const _getEntryToday = (userId) => {
    const currentDate = new Date().toJSON().slice(0, 10);
    return db('moodtracker_entries').select('*').where({ user_id: userId }).where({ created_on: currentDate });
}

export const _getRecentEntries = (userId) => {
    return db('moodtracker_entries').select('*').where({ user_id: userId }).limit(7).orderBy('created_on', 'desc');
}

export const _saveEntry = (userId, mood, stress, activities) => {
    return db('moodtracker_entries').insert({
        user_id: userId,
        mood_level: mood,
        stress_level: stress,
        activities
    })
    .onConflict('created_on')
    .merge()
    .returning('*');
}