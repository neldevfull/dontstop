module.exports = app => {
    console.log("app");
    console.log(app);

    const Task = app.db.models.Task;

    app.get("/tasks", (req, res) =>{
        Task.findAll({}).then(tasks => {
            res.json({tasks: tasks});
        });
    });
}