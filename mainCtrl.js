module.exports = {
    getAllUsers(req, res) {
        const db = req.app.get("db");
        db.getAllUsers().then(result => {
          res.json(result);
        });
      },
      getAllVehicles(req, res) {
        const db = req.app.get("db");
        db.getAllVehicles().then(result => {
          res.json(result);
        });
      },
      addUser(req, res) {
        const db = req.app.get("db");
        db.addUser([req.body.name, req.body.email]).then(result => {
          res.json(result);
        });
      },
      addVehicle(req, res) {
        const db = req.app.get("db");
        db
          .addVehicle([
            req.body.make,
            req.body.model,
            req.body.year,
            req.body.owner_id
          ])
          .then(result => {
            res.json(result);
          });
      },
      countByOwner(req, res) {
        const db = req.app.get("db");
        db.countByOwner(req.params.userId).then(result => {
          res.json(result);
        });
      },
      getByOwner(req, res) {
        const db = req.app.get("db");
        db.getByOwner(req.params.userId).then(result => {
          res.json(result);
        });
      },
      getVehiclesByParam(req, res) {
        const db = req.app.get("db");
        if (req.query.userEmail) {
          return db.getVehiclesByEmail(req.query.userEmail).then(result => {
            return res.json(result);
          });
        }
        if (req.query.userFirstStart) {
          return db
            .getVehiclesByLetters(req.query.userFirstStart + "%")
            .then(result => {
              return res.json(result);
            });
        }
      },
      getNewVehicles(req, res) {
        const db = req.app.get("db");
        db.getNewVehicles().then(result => {
          res.json(result);
        });
      },
      changeOwner(req, res) {
        const db = req.app.get("db");
        db.changeOwner([req.params.vehicleId, req.params.userId])
          .then(result => {
            res.json(result);
          });
      },
      removeOwner(req, res) {
        const db = req.app.get("db");
        db.removeOwner([req.params.vehicleId]).then(result => {
          res.json(result);
        });
      },
      removeVehicle(req, res) {
        const db = req.app.get("db");
        db.removeVehicle([req.params.vehicleId]).then(result => {
          res.json(result);
        });
      }
    };
  







