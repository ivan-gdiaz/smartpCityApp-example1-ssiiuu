var express = require("express");
var router = express.Router();

var debug = require("debug")("smartcityapp:server");

var users = {
  users: [
    {
      id: 123,
      name: "Jane Doe",
      phones: {
        home: "800-123-4567",
        mobile: "877-123-1234",
      },
      email: ["jd@example.com", "jd@example.org"],
      dateOfBirth: "1980-01-02T00:00:00.000Z",
      registered: true,
    },
    {
      id: 456,
      name: "Peter Nolan",
      phones: {
        home: "800-123-3498",
        mobile: "877-432-1278",
      },
      email: ["pt@example.com", "pt@example.org"],
      dateOfBirth: "1983-01-09T00:00:00.000Z",
      registered: false,
    },
  ],
};

/* GET users listing. */
router.get("/", function (req, res, next) {
  debug("RECUPERA DE LA BASE DE DATOS TODOS LOS USUARIOS...");
  debug("lISTA DE USUARIOS EN FORMATO JSON: ");
  debug(users);
  res.json(users); // fin res.json()
}); // fin función get()

/* GET user by id */
router.get("/:id", function (req, res, next) {
  if (req.params.id == "123") {
    debug("RECUPERA EL USUARIO: "); 
    debug(req.params.id);
    var user = {
      id: 123,
      name: "Jane Doe",
      phones: {
        home: "800-123-4567",
        mobile: "877-123-1234",
      },
      email: ["jd@example.com", "jd@example.org"],
      dateOfBirth: "1980-01-02T00:00:00.000Z",
      registered: true,
    };
    res.json(user);
  } else res.status(404).send("Sorry, item not found!");
});

/* POST a new user */
router.post("/", function (req, res, next) {
  var new_user = req.body; // para tener acceso al json de la request
  //ToDo with the new user
  res.status(200).send("User " + req.body.name + " has successfully added");
});

/* PUT user by Id */
router.put("/:id", function (req, res, next) {
  var updated_user = req.body;
  //ToDo user id (update)
  res.status(200).send("User " + req.body.name + " successfully updated");
});

/* DELETE user by Id */
router.delete("/:id", function (req, res, next) {
  //ToDo user id
  res.status(200).send("User with id" + req.params.id + " successfully removed");
});

module.exports = router;
