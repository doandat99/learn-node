class NewController {
  //get news
  index(req, res) {
    res.render("new");
  }

  //get new/:slug
  show(req, res) {
    res.send("new detail");
  }
}

module.exports = new NewController();
