module.exports = function(sequelize, DataType){
    var Survey = sequelize.define("survey",{
        id:{
            type: DataType.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        survey_name:{
            type: DataType.STRING,
            allowNull: False
        }
    })
    Survey.associate = function(models){
        Survey.hasMany(models.Survey_Line);
    }
    return Survey;
}