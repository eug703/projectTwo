module.exports = function(sequelize, DataType){
    var Survey = sequelize.define("Survey",{
        id:{
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        survey_name:{
            type: DataType.STRING,
            allowNull: false
        }
    });

    Survey.associate = function(models){
        Survey.hasMany(models.Survey_Questions);
    };
    
    return Survey;
};