let userId;
let username;
let todayDate;
let currentDate;

// automatically logins as a new user after creating it and adding to the database
const newUser = async() => {
    username = document.getElementById('username').value;
    try {
        const response = await fetch('/users', {
            method: 'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify({ username })
            })
        if (response.status === 404) {
            document.getElementById('username').value = '';
            username = '';
            showFeedback('feedback_login', 'User already exists');
        } else {
            await login();
        }
    } catch (error) {
        showFeedback('feedback_login', 'Something went wrong');
        console.log(error);
    }
}

const login = async() => {
    username = document.getElementById('username').value;
    try {
        const response = await fetch(`/users/name/${username}`);
        if (response.status === 404) {
            document.getElementById('username').value = '';
            username = '';
            showFeedback('feedback_login', 'User not found');
        } else {
            const data = await response.json();
            userId = data[0].id;
            todayDate = new Date(); // storing today's date in case we need to return to it after switching
            currentDate = todayDate;
            document.getElementById('login').style.display = "none"; // hides login form and displays tracker
            document.getElementById('root').style.display = "block";
            await showDay(currentDate);
            await showRecent();
        }
    } catch (error) {
        showFeedback('feedback_login', 'Something went wrong');
        console.log(error);
    }
}

// timed feedback message
const showFeedback = (elementId, message) => {
    const feedback = document.getElementById(elementId);
    feedback.style.display = "inline";
    feedback.innerText = message;
    setTimeout(() => { feedback.style.display = "none" }, 2000);
}

// initialized for today's date immediately after login but also used to switch entries for different dates
const showDay = async(date) => { 
    document.getElementById('today').innerText = date.toDateString();
    try {
        const dateFormatted = date.toJSON().slice(0, 10); // formates date to the format used in the database
        const response = await fetch(`/entries/${userId}/${dateFormatted}`); // tries to get entry for the specified date
        const data = await response.json();
        const activitiyChoices = document.getElementsByName("activity");
        if (data.length > 0) {
            document.getElementById(`mood${data[0].mood_level}`).checked = true;
            document.getElementById('stress').value = data[0].stress_level;
            if (data[0].activities) {
                for (checkbox of activitiyChoices) {
                    if (data[0].activities.includes(checkbox.value)) {
                        checkbox.checked = true;
                    } else {
                        checkbox.checked = false;
                    }
                }
            }
        } else {
            document.getElementById(`mood3`).checked = true; // if no entry is found, displays default values
            document.getElementById('stress').value = 3;
            for (checkbox of activitiyChoices) {
                    checkbox.checked = false;
                }
            }
        }
    catch (error) {
        console.log(error);
    }
}

// creates new elements for the recent entries (up to 7 days) including today (if saved), elements can be clicked to switch and edit entries
const showRecent = async() => {
    try {
        const response = await fetch(`/entries/${userId}/recent/`);
        const data = await response.json();
        if (data.length > 0) {
            let html = '';
            for (entry of data) {
                const date = new Date(entry.created_on);
                const moodemoji = document.getElementById(`moodemoji${entry.mood_level}`).innerText;
                let color;
                switch (entry.stress_level) { // changes color of the circle depending on the stress level
                    case 1:
                        color = '#8bd3dd';
                        break;
                    case 2:
                        color = '#c3f0ca';
                        break;
                    case 3:
                        color = '#e3f6f5';
                        break;
                    case 4:
                        color = '#ffa8ba';
                        break;
                    case 5:
                        color = '#f25f4c';
                        break;
                }
                let activities = '';
                if (entry.activities) {
                    activities = entry.activities.join(' ');
                }
                html += `<div class='past_entry'><h5 class='date-past'>${date.toDateString()}</h5><div class="box" style="background-color: ${color}" onclick="switchDay(${entry.id})">${moodemoji}</div>${activities}</div>`;
            }
        document.getElementById('past').innerHTML = html;
        }
    } catch (error) {
        console.log(error);
    }
}

// creates a new entry or updates if an entry for this day already exists
const saveEntry = async() => {
    const date = currentDate.toISOString().slice(0, 10); // formates date to the format used in the database
    const activitiyChoices = document.querySelectorAll('input[type=checkbox]:checked');
    let activities = [];
    if (activitiyChoices) {
        for (checkbox of activitiyChoices) {
            activities.push(checkbox.value);
        }
    }
    const stress = document.getElementById('stress').value;
    const moodChoices = document.querySelectorAll('input[name=mood]');
    let mood;
    for (radio of moodChoices) {
        if (radio.checked) {
            mood = radio.value;
            break;
        }
    }
    try {
        const response = await fetch('/entries', {
            method: 'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify({ userId, mood, stress, activities, date })
        })
        if (response.status === 404) {
            showFeedback('feedback_save', 'Unable to save');
        } else {
            showFeedback('feedback_save', 'Saved successfully!');
            await showRecent();
        }
    } catch (error) {
        console.log(error);
    }
}

const switchDay = async(entryId) => {
    if (document.getElementsByClassName('date-past')[0].innerText != todayDate.toDateString()) {
        saveEntry();
    } // if an entry for today doesn't exist, creates it so that the user can switch back
    try {
        const response = await fetch(`/entries/${entryId}`);
        const data = await response.json();
        currentDate = new Date(data[0].created_on);
        await showDay(currentDate);
    } catch (error) {
        console.log(error);
    }
}