module.exports = app => {
    const User = app.db.models.User;

    app.get("/users/:id", (req, res) => {
        User.findById(req.params.id, {
            attributes: ["id", "name", "email"]
        })
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    });

    app.delete("/users/:id", (req, res) => {
        User.destroy({where: {id: req.params.id} })
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