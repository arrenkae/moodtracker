import { db } from '../config/db.js';

export const _getAllActivities = () => {
    return db('moodtracker_activities').select('*').orderBy('name');
}

export const _addActivitiesToEntry = (entryId, activities) => {
    const data = [];
    activities.forEach(activity => {
        data.push({
            entry_id: entryId,
            activity: activity
        });
    });
    return db('moodtracker_activities_in_entries').insert(data).returning('*');
}

export const _getActivitiesForEntry = (entryId) => {
    return db('moodtracker_activities')
    .select('*')
    .join('moodtracker_entries_activities', {entry_id: entryId})
    .orderBy('name');
}

export const _getTopActivities = (userId) => {
    return db
    .raw(`SELECT activity, COUNT(*) FROM moodtracker_activities_in_entries WHERE entry_id IN (SELECT id FROM moodtracker_entries WHERE user_id IN (SELECT id FROM moodtracker_users WHERE id = ${userId})) GROUP BY activity ORDER BY count desc LIMIT 3`)
    .then((data) => data.rows)
}