module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                {title: "Go shopping!"},
                {title: "Clean the house"}
            ]);
        }
    };
}