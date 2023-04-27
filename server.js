const http = require('http');


const server = http.createServer((request, response)=>{
    response.status = 200;
    console.log('Helloworld')
});

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
