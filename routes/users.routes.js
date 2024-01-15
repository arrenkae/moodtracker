import express from 'express';
import { getUsers, getUserById, login } from '../controllers/users.controller.js';

export const users_router = express.Router();

users_router.get('/', getUsers);
users_router.get('/:id', getUserById);
users_router.post('/login', login);