const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router('./db.json');

const userdb = JSON.parse(fs.readFileSync('src/_services/users.json', 'UTF-8'));
const animalsdb = JSON.parse(fs.readFileSync('src/_services/animals.json', 'UTF-8'));

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789'
const expiresIn = '1h'

// Create a token from a payload 
function createToken(payload){
  return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

// Verify the token 
function verifyToken(token){
  return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
}

// Check if the user exists in database
function isAuthenticated(db, email, password){
  return db.users.findIndex(user => user.email === email && user.password === password) !== -1;
}

//Fetch animals from animals.json
server.get('/animals', (req, res) => {
  console.log("animals endpoint called; request body:");
  fs.readFile("src/_services/animals.json", (err, data) => { 
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({status, message})
      return
    };
})
    const animals = animalsdb.animals;
    res.status(200).json(animals)
})

//Create a new animal card
server.post('/animals', (req, res) => {
  console.log("animals create endpoint called; request body:");
  console.log(req.body);
  const {id, ...animal} = req.body;
  const nameId = animal.name.replace(/[aeoyiu\s]/gi, '').toLowerCase();

  if(animalsdb.animals.findIndex(item => item.name === animal.name) !== -1){
    const status = 401;
    const message = 'Such an animal already exists';
    res.status(status).json({status, message});
    return
  }

fs.readFile("src/_services/animals.json", (err, data) => {  
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({status, message})
      return
    };

    // Get current animals data
    var newData = JSON.parse(data.toString());

    //Add new animal
    newData.animals.push({id: nameId, ...animal}); //add some data
    fs.writeFile("src/_services/animals.json", JSON.stringify(newData), (err, res) => {  // WRITE
        if (err) {
          const status = 401
          const message = err
          res.status(status).json({status, message})
          return
        }
    });
});
res.status(200).json(animalsdb.animals)
})

//Update existing an animal card
//to do



//Delete an animal card
server.delete("/animals/:id", (req, res) => {
  console.log("delete animal endpoint called; request body:");
  fs.readFile("src/_services/animals.json", (err, data) => {  
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({status, message})
      return
    }
    
    const newData = animalsdb.animals.filter(animal => animal.id !== req.params.id);

    fs.writeFile("src/_services/animals.json", JSON.stringify(newData), (err, res) => {  // WRITE
      if (err) {
        const status = 401
        const message = err
        res.status(status).json({status, message})
        return
      }
    })
  });
  res.status(200).json({})
});

  // Register New User
server.post('/auth/register', (req, res) => {
    console.log("register endpoint called; request body:");
    console.log(req.body);
    const {email, password} = req.body;
    const newUser = {email: email, password: password, role: "user"}
  
    if(isAuthenticated(userdb, email, password) === true) {
      const status = 401;
      const message = 'Email and Password already exist';
      res.status(status).json({status, message});
      return
    }
  
  fs.readFile("src/_services/users.json", (err, data) => {  
      if (err) {
        const status = 401
        const message = err
        res.status(status).json({status, message})
        return
      };
  
      // Get current users data
      var newData = JSON.parse(data.toString());
  
      // Get the id of last user
      var last_item_id = newData.users.length > 1 ? newData.users[newData.users.length-1].id : 0;
      //Add new user
      newData.users.push({...newUser, id: last_item_id + 1}); //add some data
      fs.writeFile("src/_services/users.json", JSON.stringify(newData), (err, res) => {  // WRITE
          if (err) {
            const status = 401
            const message = err
            res.status(status).json({status, message})
            return
          }
      });
  });
  
  // Create token for new user
  const access_token = createToken(newUser)
  console.log("Access Token:" + access_token);
  res.status(200).json({access_token})
})

// Login to one of the users from ./users.json
  server.post('/auth/login', (req, res) => {
    console.log("login endpoint called; request body:");
    console.log(req.body);
    const contents = fs.readFileSync("src/_services/users.json", 'utf8');
    const newData = JSON.parse(contents)
    if (!isAuthenticated(newData, req.body.email, req.body.password)) {
      const status = 401
      const message = 'Incorrect email or password'
      res.status(status).json({status, message})
      return
    } 
    const currentUser = newData.users.filter(user => req.body.email === user.email && req.body.password === user.password);
    const [{email, password, role}] = currentUser;
    const access_token = createToken({email, password, role})
    console.log("Access Token:" + access_token);
    res.status(200).json({access_token})
  })

  server.use(/^(?!\/auth).*$/,  (req, res, next) => {
    if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
      const status = 401
      const message = 'Bad authorization header'
      res.status(status).json({status, message})
      return
    }
    try {
       verifyToken(req.headers.authorization.split(' ')[1])
       next()
    } catch (err) {
      const status = 401
      const message = 'Error: access_token is not valid'
      res.status(status).json({status, message})
    }
})

server.use(router)

server.listen(8000, () => {
  console.log('Run Auth API Server')
})