module.exports = function(sequelize, DataType){
    var Survey_Answers = sequelize.define("Survey_Answers",{
        id:{
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        answers:{
            type: DataType.INTEGER,
            allowNull: false
        }
    });

    Survey_Answers.associate = function(models){
        Survey_Answers.belongsTo(models.User);
        Survey_Answers.belongsTo(models.Survey_Questions);
    };
    return Survey_Answers;
};