const express = require("express");
const app = express();
const PORT = 8000;

//simple object
const rappers = {
  "21 savage": {
    age: 29,
    birthName: "Sheyaa Bin Abraham-Joseph",
    birthLocation: "London, England",
  },
  "chance the rapper": {
    age: 29,
    birthName: "Chancelor Bennett",
    birthLocation: "Chicago, Illinois",
  },
  "dylan": {
    age: 29,
    birthName: "Dylan",
    birthLocation: "Dylan",
  },
};

//ROUTES
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (request, response) => {
  const rappersName = request.params.rapperName.toLowerCase();
  rappers[rappersName]
    ? response.json(rappers[rappersName])
    : response.json(rappers["dylan"]);
  //response.json(rappers);
});

app.listen(PORT, () => {
  console.log(`PORT running on ${PORT}`);
});
