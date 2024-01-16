import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { users_router } from './routes/users.routes.js';
import { entries_router } from './routes/entries.routes.js';

dotenv.config();

const app = express();
const __dirname = path.resolve();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server runs on port ${process.env.PORT || 3000}`);
});

app.use('/', express.static(__dirname + '/public'));

app.use('/users', users_router);
app.use('/entries', entries_router);