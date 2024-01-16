import express from 'express';
import { getUsers, getUserById, getUserByName, newUser, deleteUser } from '../controllers/users.controller.js';

export const users_router = express.Router();

users_router.get('/', getUsers);
users_router.get('/:id', getUserById);
users_router.get('/name/:username', getUserByName);
users_router.post('/', newUser);
users_router.delete('/:id', deleteUser);