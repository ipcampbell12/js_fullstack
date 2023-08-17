module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {

        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        age: {
            //needed to use integer instead of number
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    return Users;
};