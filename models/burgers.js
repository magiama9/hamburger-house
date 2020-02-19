module.exports = function(sequelize, DataTypes) {
  const Burgers = sequelize.define("Burgers", {
    name: DataTypes.STRING,
    isEaten: { type: DataTypes.BOOLEAN, default: false }
  });
  return Burgers;
};
