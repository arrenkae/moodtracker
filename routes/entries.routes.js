import express from 'express';
import { getEntriesForUser, getEntryToday, getRecentEntries, saveEntry } from '../controllers/entries.controller.js';

export const entries_router = express.Router();

entries_router.get('/:userId', getEntriesForUser);
entries_router.get('/:userId/today', getEntryToday);
entries_router.get('/:userId/recent', getRecentEntries);
entries_router.post('/', saveEntry);