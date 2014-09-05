pfgetset
========

very simple get set for socket.io

Utilisation : private

``js
var GetSet = require("pfgetset");

var gs = new GetSet();

// in socket.io : ....on('connection', function(socket){
		gs.set(socket, 'login'); // return login if login not exists
		gs.get(socket); // return 'login'
		gs.list(); // return all login (an object);
		gs.del(socket); // delete 'login' and return 'login'
//});
``
