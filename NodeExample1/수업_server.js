/** * 웹 서버에 html 파일 서비스 하기 */ 
var http = require('http'); 
var fs = require('fs'); 
// 파일 읽기, 쓰기 등 을 할 수 있는 모듈 
// 404 error message : 페이지 오류가 발생했을때,

function send404Message(response){ 
    response.writeHead(404,{"Content-Type":"text/plain"});
    response.write("404 ERROR... "); 
    response.end(); 
} ;
// 200 Okay : 정상적인 요청 
function onRequest(request, response){ 
    
    if(request.method == 'GET' && request.url == '/'){ 
        response.writeHead(200,{"Content-Type":"text/html"}); 
        fs.createReadStream("./수업_index.html").pipe(response); 
    } else { // file이 존재 하지않을때,
         send404Message(response); 
        
     } 
} ;

http.createServer(onRequest).listen(3333); 
//console.log("Server Created...");
