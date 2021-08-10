'use strict';

const express = require('express');
const app = express();
app.use(express.json());

// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.

const dataBase = [];

function DataBase(){
  this.data = [];
}

DataBase.prototype = {
  insert: function(user){
    
  }
}

/**
 * @param String
 * @description
 * @returns
 */
app.post('/candidates', function(req, res) {
  
  if(!req.body){
    return res.status(400).send({});
  }

  const body = req.body;

  dataBase.push(body);

  res.status(200).send(body);

});

app.get('/candidates/search', function(req, res) {
  
  const query = req.query;
  if(!query || !query.skills){
    return res.status(400).send({});
  }
  let skills = query.skills.split(",");
  let user = findUserWithMatchingSkills(skills);
 
  res.setHeader('Content-Type', 'application/json');

  if(!user){
    res.status(404).send({});
    return;
  }

  res.status(200).send(user);

});

function findUserWithMatchingSkills(skills){
  let user = null;
  if(!skills || !skills.length){
    return user;
  }

  for(let i = 0; i < dataBase.length; i++){
    let userObj = {...dataBase[i]};
    userObj.matchedCount = 0;
    let p = 0; // user
    while(p < userObj.skills.length){
      let userSkill = userObj.skills[p];
      if(skills.indexOf(userSkill) > -1){
        userObj.matchedCount += 1;
      }
      p ++;
    }
    if(userObj.matchedCount > 0){
      if(user === null || userObj.matchedCount > user.matchedCount){
        user = userObj;
      }
    }
  }

  return user;
}


app.listen(process.env.HTTP_PORT || 3000);



findOneByMaxSkills: function(skills){
     
    let user = null;
    
    if(!skills || !skills.length){
      return user;
    }

    for(let i = 0; i < this.data.length; i++){
      let userObj = {...this.data[i]};
      userObj.matchedCount = 0;
      let p = 0; // user
      
      while(p < userObj.skills.length){
        let userSkill = userObj.skills[p];
        if(skills.indexOf(userSkill) > -1){
          userObj.matchedCount += 1;
        }
        p ++;
      }

      if(userObj.matchedCount > 0 && (user === null || userObj.matchedCount > user.matchedCount)){
          user = userObj;
      }
    }

    return user;
  }