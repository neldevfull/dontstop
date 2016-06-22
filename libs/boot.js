module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log(`DontStop API - port ${app.get("port")}`);
    });
}