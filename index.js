const express = require('express');
const routes = require("./src/routes/");

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json());

app.use("/", routes);

app.get("/ping", function (_req, res) {
    res.send("pong");
  });

process.env.DEV_PORT = 3001;

process.env.NODE_ENV === "production"
  ? (process.env.PORT = process.env.PROD_PORT)
  : (process.env.PORT = process.env.DEV_PORT);

  
  app.listen(process.env.PORT, () => {
    console.log(`Server listening ${process.env.PORT}`);
  });
