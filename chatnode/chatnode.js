var net = require ("net");
var chatServer = net.createServer(),clientList = [];
indent: Standard input:3: Error:Unexpected end of file
chatServer.on ("connection", function (client) {
	client.write ("Hi! \n");
	clientList.push(client);
	client.name = client.remoteAddress + ":" + client.remotePort
	client.on("data",function(data){
		//console.log(data);
		for(var i=0;i<clientList.length;i++){
			clientList[i].write(data);
		}
	});
	//client.write("Bye! /n");
	//client.end();
});
chatServer.listen(9000,function(){
	console.log("sucess in 9000");
});
