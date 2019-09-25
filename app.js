require("dotenv").config();

const twilio = require("twilio");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_AUTHTOKEN;
const client = new twilio(accountSid, authToken);
const cronJob = require("cron").CronJob;

/* //todo:
call a function to generate the body of the text message from an array of messages

use the return value of the function as the template literal value for the body of the text message



*/

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
  true,
  ""
);
