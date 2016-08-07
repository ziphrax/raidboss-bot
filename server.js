var express = require('express'),
    app = express(),
    port = 3000,
    config = require('./config');


app.use(express.static('client'));

app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === config.VALIDATION_TOKEN) {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});

var server = app.listen(port,function(err){
  if(err){
    console.log(err);
  }
  console.log('RaidBoss-Bot Server is listening on port %s',port);
});
