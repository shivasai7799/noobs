const fs = require('fs');
const http = require('https');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const cricketData = JSON.parse(json);
// console.log(cricketData);
// console.log(`${__dirname}/data/data.json`);

const server = http.createServer((req, res) => {
    
    const pathName = url.parse(req.url, true).pathname;
    console.log(pathName);
    const id = url.parse(req.url, true).query.id;
    
    // PRODUCTS OVERVIEW
    if (pathName === '/products' || pathName === '/') {
        res.writeHead(200, { 'Content-type': 'text/html'});
        
        fs.readFile(`${__dirname}/templates/template-overview.html`, 'utf-8', (err, data) => {
            let overviewOutput = data;
            
            fs.readFile(`${__dirname}/templates/template-card.html`, 'utf-8', (err, data) => {
            
                const cardsOutput = cricketData.map(el => replaceTemplate(data, el)).join('');
                overviewOutput = overviewOutput.replace('{%CARDS%}', cardsOutput); 
                
                res.end(overviewOutput);
            });
        });
        
        
    }
    
    // LAPTOP DETAIL
    else if (pathName === '/laptop' && id < cricketData.length) {
        res.writeHead(200, { 'Content-type': 'text/html'});
        
        fs.readFile(`${__dirname}/templates/template-laptop.html`, 'utf-8', (err, data) => {
            const laptop = cricketData[id];
            const output = replaceTemplate(data, laptop);
            res.end(output);
        });
    }
    
    // IMAGES
    else if ((/\.(jpg|jpeg|png|gif)$/i).test(pathName)) {
        fs.readFile(`${__dirname}/data/img${pathName}`, (err, data) => {
            res.writeHead(200, { 'Content-type': 'image/jpg'});
            res.end(data);
        });
    }
    
    // URL NOT FOUND
    else {
        res.writeHead(404, { 'Content-type': 'text/html'});
        res.end('URL was not found on the server!');
    }
    
});


server.listen('1337','127.0.0.1',() => {
console.log('listening for requests now');
});


function replaceTemplate(originalHtml, laptop) {
    let output = originalHtml.replace(/{%PLAYERNAME%}/g, laptop.playerName);
    output = output.replace(/{%IMAGE%}/g, laptop.image);
    output = output.replace(/{%DATEOFBIRTH%}/g, laptop.dateOfBirth);
    output = output.replace(/{%AGE%}/g, laptop.age);
    output = output.replace(/{%TESTDEBUT%}/g, laptop.testDebut);
    output = output.replace(/{%LASTTEST%}/g, laptop.lastTest);
    output = output.replace(/{%ODIDEBUT%}/g, laptop.odiDebut);
    output = output.replace(/{%LASTODI%}/g, laptop.lastOdi);
    output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
    output = output.replace(/{%ID%}/g, laptop.id);
    return output;
}