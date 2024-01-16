import express from 'express';
import { getEntryById, getEntryByDate, getRecentEntries, saveEntry } from '../controllers/entries.controller.js';

export const entries_router = express.Router();

entries_router.get('/:id', getEntryById);
entries_router.get('/:userId/recent', getRecentEntries);
entries_router.get('/:userId/:date', getEntryByDate);
entries_router.post('/', saveEntry);