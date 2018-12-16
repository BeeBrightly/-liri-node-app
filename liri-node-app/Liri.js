require("dotenv").config();

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 5c7ac01fd3964ed297e50fa6ad7514c3,
  secret: 33880a737d934f2982e8cbc671aeada2
});
 
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });

