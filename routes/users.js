module.exports = app => {
    const User = app.db.models.User;

    app.route("/user")
        .all(app.auth.authenticate())
        .get((req, res) => {
            User.findById(req.user.id, {
                attributes: ["id", "name", "email"]
            })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
    })
    .delete((req, res) => {
        User.destroy({where: {id: req.user.id} })
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    });

    app.post("/users", (req, res) => {
        User.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    });
}