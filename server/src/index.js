const express    = require('express');
const bodyParser = require('body-parser');
const users      = require('./users');

const PORT = 3000;

var app = express();
app.use(bodyParser.json());

// user apis.
app.get("/get_users", (_request, result) => {
  users.get_users((record) => {
    result.send(JSON.stringify({"status": 200, "error": null, "response": record}));
  });
});

app.post("/add_user", (request, result) => {
  inputs = request.body;
  console.log(inputs);
  
  users.add_user((record) => {
    result.send(JSON.stringify({"status": 200, "error": null, "response": record}));
  });
});

app.get("/add_table", (request, result) => {
  users.add_table((record) => {
    result.send(JSON.stringify({"status": 200, "error": null, "response": record}));
  });
});

app.listen(PORT, () => {
 console.log(`Running backed on port: ${PORT}.`);
});