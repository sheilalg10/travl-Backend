const apiRouter = require("express").Router();

const roomRouter = require("./roomsRouter");

apiRouter.use("/rooms", roomRouter);

module.exports = apiRouter;