var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('用户连接');
  socket.on('disconnect', function(){
    console.log('用户断开连接');
  });
  socket.on('connect', function(){
    console.log('用户连接');
  });
  socket.on('chat message', function(msg){
  	console.log('消息日志: ' + msg);
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('监听 localhost:' + port);
});
