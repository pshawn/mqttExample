//mqtt basic example 
var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosca.io')
 
client.on('connect', function () {
  client.subscribe('presence')
  client.publish('presence', 'Hello mqtt')
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(topic);
  if (topic=="presence") {
    console.log("Subscribed message is : " + message);
  } else {
  console.log(message.toString())
  client.end()	
  }
  
})