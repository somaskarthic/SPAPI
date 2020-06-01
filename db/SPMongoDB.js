
  var http = require('http');
  var mongo = require('mongodb');

 var MongoClient = require('mongodb').MongoClient;
 var mongoURL;
 var resultJson;
 

const testUser=()=>
{
  resultJson=retrieveuserDBModel("Tom","test");
};

const constructMongoURL =() =>
{
 var url = "mongodb://localhost:27017/"; 
 return url;

};

const retrieveuserDBModel = (userId, password) => {
  
  try
  {
  
 mongoURL = constructMongoURL();
  
  console.log(userId);
  console.log(password);
 MongoClient.connect(mongoURL, function(err, db) {
 // if (err) throw err;
  var dbo = db.db("Employee");
  var query = { UserId: userId , Password: password };
  dbo.collection("Employee").find(query).toArray(function(err, result) {
//    if (err) throw err;
    //console.log(result);
    resultJson=result;
    db.close();
  });
});
console.log("DB" + resultJson) ;
//console.log (resultJson);
return resultJson; }
catch(e) {
  throw new Error(e.message);}

};

testUser();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});   
  res.end(JSON.stringify(resultJson)) ;
//res.end("testtt");
}).listen(8084);

module.exports = {
  retrieveuserDBModel
}
