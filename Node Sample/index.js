const fs = require('fs');
const http = require('http');
const url = require('url');



const json = fs.readFileSync(`${__dirname}/data/data.json` , 'utf-8');
const laptopData = JSON.parse(json);


//Creating a webserver 
const server = http.createServer((req ,res) => {
const pathName = url.parse(req.url , true).pathname;
const id = url.parse(req.url , true).query.id;
console.log(`${id}`);

if(pathName === '/products' || pathName === ' '){
    res.writeHead(200 , {'content-Type' : 'text/html'});
    res.end(`this is the product path with ${id}`);
}

else if (pathName === '/laptops' && id < laptopData.length){
    res.writeHead(200 , {'content-Type' : 'text/html'});
    res.end(`This is the Laptop path with ${id}`);    
}
else {
    res.writeHead(404 , {'content-Type' : 'text/html'});
    res.end('Url not found');
}

});

server.listen(1337,'127.0.0.1',() => {
console.log('Listening for requests now');
});