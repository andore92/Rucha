 
var Token = require('../hyphenate/token');
var User = require('../hyphenate/user');
var ChatHistory = require('../hyphenate/chatHistory');
var Files = require('../hyphenate/files');
var Group = require('../hyphenate/group');
var ChatRoom = require('../hyphenate/chatRoom');
var Message = require('../hyphenate/message');

token = new Token();
user = new User();
chatHistory = new ChatHistory();
files = new Files();
group = new Group();
chatRoom = new ChatRoom();
message = new Message();


var hyphenate= {

	getuser: function(userid,callback) {
		console.log(" Module.js getuser: function" + userid);
		user.getUser(userid,callback);
			
},

    createUser: function(userid,password,callback) {
		console.log(" Module.js createuser: function" + userid +" "+ password);
		user.createUser(userid,password,callback);
			
},

   createChatRoom: function(chatRoomJson,callback) {
		console.log(" Module.js createchatroom: function" + chatRoomJson);
		chatRoom.createChatRoom(chatRoomJson, callback);
			
},

	getChatRoomJoined: function(userid,callback) {
		console.log(" Module.js getChatRoomJoined: function" + userid);
		chatRoom.getChatRoomJoined(userid,callback);
			
},

	};


	module.exports = hyphenate;