# Don't Worry Be Happy: Mood & Stress Tracker

A web app to log your mood and stress levels for any given day, as well as things that made you feel better.

- Uses node.js server and remote PostgreSQL database to store users and entries
- Database and connection data provided locally
- One entry per day: if you already logged the current day, the data is displayed as the default inputs and can be changed
- Tracker data is displayed for the past 7 days and can be edited by clicking the corresponding mood circles

#### Backend routes:

- GET /users - all users
- GET /users/:id - specific user by id
- GET /users/name/:username - specific user by username
- POST /users - create new user
- DELETE /users/:id - delete user by id
- GET /entries/:id - specific entry by id
- GET /entries/:userId/all - all entries for the specific user
- GET /entries/:userId/recent - entries up to the past 7 days for the specific user
- GET /entries/:userId/:date - entry from the specific date for the specific user
- POST /entries/ - create new entry or update if entry for this day already exists
- DELETE /entries/:id - delete entry by id
