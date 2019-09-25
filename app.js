require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_AUTHTOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Testing my app",
    from: `${process.env.TWILIO_PHONE_NUMBER}`,
    to: `${process.env.DESTINATION_PHONE_NUMBER}`
  })
  .then(message => console.log(message.sid));
