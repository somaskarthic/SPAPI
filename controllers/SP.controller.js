const { userService } = require('../services')
var url = require('url');
const { getUser } = userService

/*
 * call other imported services, or same service but different functions here if you need to
*/
const validateUser = async (req, res, next) => {
  //console.log("request-"+req.);
  //const {userId, password} = req.body;
 var queryparams = url.parse(req.url,true).query;
  var userId = queryparams.userId;
  var password = queryparams.password;

  console.log("user "+userId);
  //try {
    if(userId==null || password==null)
     {
       res.sendStatus(401);
       
     }
     else
     {
    await getUser(userId, password);
    // other service call (or same service, different function can go here)
    // 
    res.sendStatus(200);
    
    
    
    next("user validated");
    console.log("testbody"+res.body);
     }
  } 
  // catch(e) {
  //   console.log(e.message);
  //   res.sendStatus(500) && next(error);
  // }



module.exports = {
  validateUser
}
