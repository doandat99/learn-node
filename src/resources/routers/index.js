const newRouter = require("./news");
const siteRouter = require("./site");

const routers = (app) => {
  app.use("/new", newRouter);

  app.use("/", siteRouter);
};

module.exports = routers;
