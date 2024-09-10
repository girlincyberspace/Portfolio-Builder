module.exports = (sequelize, DataTypes) => {

    const Portfolios = sequelize.define("Portfolios", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        theme: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

    return Portfolios;
}