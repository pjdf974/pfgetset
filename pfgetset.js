module.exports = (function(){
	function GetSet(){
		if(!(this instanceof GetSet))
			return new GetSet;
		this.users = {};
		this.ids = {};
	};
	GetSet.prototype.get = function(socket){
		if(arguments.length===0)
			throw(new Error("1 argument required"));
		return(this.ids[socket.id]);
	};
	GetSet.prototype.set = function(socket, login){
		if(arguments.length<2)
			throw(new Error("2 arguments required"));
		if(this.users[login])
			return(false);
		else{
			this.users[login] = true;
			this.ids[socket.id] =login;
			return(login);
		};
	};
	GetSet.prototype.del = function(socket){
		if(arguments.length===0)
			throw(new Error("1 argument required"));
		var login = this.ids[socket.id];
		delete this.users[login];
		delete this.ids[socket.id];
		return(login);
	};
	GetSet.prototype.list = function(){
		return(this.users);
	};
	return(GetSet);
})();