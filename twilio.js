// Twilio Credentials
const accountSid = 'ACaefc6c3e9e99193c4bf05ed0bdf4fd3f';
const authToken = 'e50f3af6cded7c2198bc8b0d23386aca';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

var aMsg = {
    to: '+841665501483', // recipient
    from: '+16282276116', // valid Twilio number
    body: 'Gửi đc unicode k ấy nhỉ',
};

client.messages.create(aMsg)
    .then(sent => console.log(sent))
    .catch(err => { throw err });