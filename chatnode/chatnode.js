var net = require ("net");
var chatServer = net.createServer(),clientList = [];
chatServer.on ("connection", function (client) {
    client.name = client.remoteAddress + ":" + client.remotePort;

    client.write ("Hi! " +client.name+ " \n");
	clientList.push(client);
	client.on("data",function(data){
		//console.log(data);
        var cleanup=[];
		for(var i=0;i<clientList.length;i++){
			//clientList[i].write(data);
            if(client !== clientList[i]){
                if(clientList[i].writable){
                    clientList[i].write(client.name+"says"+data);
                }else{
                    cleanup.push(clientList[i]);
                    clientList[i].destroy();
                }
            }
		}
        for(i=0;i<cleanup.length;i+=1){
            clientList.splice(clientList.indexOf(cleanup[i]),1);
        }
	});
    client.on("end",function(){
        clientList.splice(clientList.indexOf(client),1);
    });
    client.on("error",function(){
       console.log(e);
    });
	//client.write("Bye! /n");
	//client.end();
});
chatServer.listen(9000,function(){
	console.log("sucess in 9000");
});
