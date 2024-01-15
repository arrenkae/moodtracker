import express from 'express';
import { getEntriesForUser, getRecentEntries, newEntry, editEntry } from '../controllers/entries.controller.js';

export const entries_router = express.Router();

entries_router.get('/:userId', getEntriesForUser);
entries_router.get('/:userId/:n', getRecentEntries);
entries_router.post('/', newEntry);
entries_router.put('/:id', editEntry);