import express from 'express';
import { getAllEntries, getEntryById, getAllUserEntries, getRecentEntries, getEntryByDate, saveEntry, deleteEntry } from '../controllers/entries.controller.js';

export const entries_router = express.Router();

entries_router.get('/', getAllEntries);
entries_router.get('/:id', getEntryById);
entries_router.get('/:userId/all', getAllUserEntries);
entries_router.get('/:userId/recent', getRecentEntries);
entries_router.get('/:userId/:date', getEntryByDate);
entries_router.post('/', saveEntry);
entries_router.delete('/:id', deleteEntry);