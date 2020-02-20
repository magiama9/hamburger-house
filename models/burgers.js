module.exports = function(sequelize, DataTypes) {
  const Burgers = sequelize.define("Burgers", {
    name: DataTypes.STRING,
    isEaten: { type: DataTypes.BOOLEAN, default: 0}
  });
  return Burgers;
};
