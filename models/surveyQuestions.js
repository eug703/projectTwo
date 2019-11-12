module.exports = function(sequelize, DataType){
    var Survey_Questions = sequelize.define("Survey_Questions",{
        id:{
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        question:{
            type: DataType.STRING,
            allowNull: false
        },
        lowerbound_answer_value:{
            type: DataType.STRING,
            allowNull: true
        },
        upperbound_answer_value:{
            type: DataType.STRING,
            allowNull: true
        }
    });

    Survey_Questions.associate = function(models){
        Survey_Questions.belongsTo(models.Survey);
    };

    return Survey_Questions;
};