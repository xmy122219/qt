//引入http模块
var http=require('http');
//引入fs模块
var fs=require("fs");

http.createServer(function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
	
	
		fs.readFile("路由.txt","utf-8",function(err,data){
			if(err){
				throw err
			}
			res.end(data)
		});
	
}).listen(8714)
console.log("启动成功")