module.exports = function(sequelize, DataType){
    var Survey_Line = sequelize.define("survey_line",{
        id:{
            type: DataType.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        survey_name:{
            type: DataType.STRING,
            allowNull: False
        },
        surveyId:{
            type: DataType.INTEGER
        }
    })
    Survey_Line.associate = function(models){
        Survey_Line.belongsTo(models.Survey);
        Survey.hasMany(models.Survey_Answers);
    }
    return Survey_Line;
}