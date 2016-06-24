module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get("port"), () => {
            console.log(`DontStop API - port ${app.get("port")}`);
        });
    });
}