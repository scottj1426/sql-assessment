module.exports = {
    getAllUsers(req, res) {
        const db = req.app.get("db");
        db.getAllUsers().then(result => {
          res.json(result);
        });
      },






}
