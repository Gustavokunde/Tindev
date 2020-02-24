const express = require("express");
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const routes = express.Router();

routes.get("/", (req, res) => {});

routes.post("/devs", DevController.store);
routes.post("/devs/:devsId/likes", LikeController.store);

module.exports = routes;
