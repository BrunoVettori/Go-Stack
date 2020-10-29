const express = require("express");
const cors = require("cors");

const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  
  return(response.status(200).json(repositories))

});

app.post("/repositories", (request, response) => {
  
  const {title, url, techs } = request.body

  const likes = 0

  repositories.push({id: uuid(), title, url, techs, likes})

  console.log(repositories)

  return(response.status(200).json(repositories[repositories.length -1 ]))

});

app.put("/repositories/:id", (request, response) => {
  
  const {id} = request.params

  const repositori = repositories.find(repositori => repositori.id == id)

  console.log('Repo found: ', repositori)

  return(response.status(200).json(repositori))

});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
