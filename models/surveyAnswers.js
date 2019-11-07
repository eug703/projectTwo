module.exports = function(sequelize, DataType){
    var Survey_Answers = sequelize.define("survey_answers",{
        id:{
            type: DataType.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        answers:{
            type: DataType.INTEGER,
            allowNull: False
        },
        userId: {
            type: DataType.INTEGER,
        },
        survey_linesId: {
            type: DataType.INTEGER
        }
    })
    Survey_Answers.associate = function(models){
        Survey_Answers.belongsTo(models.User);
        Survey_Answers.belongsTo(models.Survey_Lines);
    }
    return Survey_Answers;
}