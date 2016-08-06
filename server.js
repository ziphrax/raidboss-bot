var express = require('express'),
    app = express(),
    port = 3000;

app.use(express.static('client'));
var server = app.listen(port,function(err){
  if(err){
    console.log(err);
  }
  console.log('RaidBoss-Bot Server is listening on port %s',port);
});
