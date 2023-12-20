const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: '“The word is your oyster”, what does it mean? I have no idea myself in that the world is what you make of it. The journey through life is an adventure. You make meanings in life, make stories and make friends. Do not be afraid to make friends. And always be ready no matter what that you might encounter people in life better than you. Compete with yourself and not with others.',
    from: '+16194521087',
    to: '+2347037642158',
  })
  .then((message) => console.log(message.sid));

