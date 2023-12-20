import os
from twilio.rest import Client


sid = os.getenv("TWILIO_SID")
toekn = os.getenv("TWILIO_TOKEN")


account_sid = 'AC05ff2799a6464e603abf5bc73c9ec5d7'
auth_token = '[AuthToken]'
client = Client(account_sid, auth_token)

message = client.messages.create(
  from_='+16194521087',
  to='+2347037642158'
)

print(message.sid)