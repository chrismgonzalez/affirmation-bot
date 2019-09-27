# Affirmation Bot

Affirmation Bot is a simple NodeJS and Express app that uses the Twilio API to send and receive SMS text messages.

## How to get it running on your machine

- Install Node
- Fork the repo to your Github, clone the project to your machine
- ```npm install```
- Create a Twilio account that gives you a Twilio phone number, Account SID, and Auth Token.
- Create a ```.env``` file in the project root directory.
- Replace ```TWILIO_ACCOUNT_SID```, ```TWILIO_AUTH_TOKEN```, with the credentials that Twilio gives you in your account dashboard
- Replace ```TWILIO_PHONE_NUMBER``` with the phone number from your account dashboard
- Replace ```DESTINATION_PHONE_NUMBER``` with your personal cell phone number formatted like this: ```+18001234567```.  Be sure to surround the phone number in single quotes.
- Once you have completed the above steps - proceed to your terminal and run ```npm run app.js```
- NOTE: Twilio only allows you to send to phone numbers that you have authorized while you are using a trial account.  Upgrade your account to send to other phone numbers.

Want to contribute? Fork the Repo and submit a PR.
