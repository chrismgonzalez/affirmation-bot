require("dotenv").config();

const twilio = require("twilio");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_AUTHTOKEN;
const client = new twilio(accountSid, authToken);
const cronJob = require("cron").CronJob;

let sendText = new cronJob(
  "45 14 * * *",
  function() {
    client.messages.create(
      {
        body: "The CRON job worked!",
        from: `${process.env.TWILIO_PHONE_NUMBER}`,
        to: `${process.env.DESTINATION_PHONE_NUMBER}`
      },
      function(err, data) {}
    );
  },
  null,
  true
);
