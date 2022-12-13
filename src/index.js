const path = require("path");
const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const app = express();
const port = 3001;
const routers = require("./resources/routers");

app.use(express.static(path.join(__dirname, "public")));

//http logger
// app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));

routers(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
