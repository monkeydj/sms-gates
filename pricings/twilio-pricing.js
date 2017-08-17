const Twilio_SID = "ACaefc6c3e9e99193c4bf05ed0bdf4fd3f";
const API_Token = "e50f3af6cded7c2198bc8b0d23386aca";

var twicli = require("twilio")(Twilio_SID, API_Token);

console.log(twicli.pricing.messaging.countries("VN"));

function callback(err, resp) {
    console.log(resp);
    if (err) throw err;
}