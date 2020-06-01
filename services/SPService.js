var http = require('http');
const { retrieveuserDBModel } = require('../db')

var resultJson;

/*
  * if you need to make calls to additional tables, data stores (Redis, for example), 
  * or call an external endpoint as part of creating the user, add them to this service
*/
 testUser= async()=>
{
  resultJson= 
  await getUser("Tom","test");
  
  //console.log(resultJson);
};


const getUser = async (userId, password) => {
  try {
    return await retrieveuserDBModel(userId, password)
  } catch(e) {
    throw new Error(e.message)
  }
}

//testUser();

http.createServer(function (req, res) {
  
    res.writeHead(200, {'Content-Type': 'text/html'});   
  res.end("hi"+JSON.stringify(getUser("Tom","test"))) ;
//res.end("testtt");
}).listen(8083);

module.exports = {
  getUser
}
