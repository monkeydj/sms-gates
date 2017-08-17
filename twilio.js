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
    .then(checkStatus)
    .catch(err => { throw err });

function checkStatus(sentMsg) {

    console.log(sentMsg);
    console.log(new Date() + "=".repeat(45));

    client.messages(sentMsg.sid).get((err, info) => {
        if (err) throw err;
        console.log(info);
        // if (sentMsg.status != "sent")
        //     setTimeout(() => checkStatus(sentMsg), 2000);
    });

}