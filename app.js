require("dotenv").config();

const twilio = require("twilio");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_AUTHTOKEN;
const client = new twilio(accountSid, authToken);
const cronJob = require("cron").CronJob;

const affirmations = [
  "You are beautiful",
  "You look beautiful today",
  "I love you so much!",
  "You are my heart and soul"
];

function getAffirmation() {
  return affirmations[Math.floor(Math.random() * affirmations.length)];
}

let sendText = new cronJob(
  "20 21 * * *",
  function() {
    client.messages.create(
      {
        body: getAffirmation(affirmations),
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
