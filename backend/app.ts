import express from "express";
import bodyParser from "body-parser";

import enviromentVariables from "./src/utils/enviromentVariables";
import routes from "./src/router/index";

const server = express();

server.use("/api", routes);

server.listen(enviromentVariables.PORT, () => {
  console.log("Up and running");
});
