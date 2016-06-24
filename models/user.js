module.exports = (sequelize, DataType) => {
    const User = sequelize.define("User", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        {
            classMethods: {
                associate: (models) => {
                    User.hasMany(models.Task);
                }
            }
        }
    });

    return User;
}