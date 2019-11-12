module.exports = function(sequelize, DataType){
    var User = sequelize.define("User",{
        id:{
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataType.STRING,
            unique: true,
            allowNull: false
        },
        first_name:{
            type: DataType.STRING,
            allowNull: false
        },
        last_name: {
            type: DataType.STRING,
            allowNull: false
        },
        password: {
            type: DataType.STRING,
            validate:{
                len:{
                    args:[1, 15],
                    msg: "Password must be between 1 and 15 letters"
                }
            }
        },
        birthday: DataType.DATE
    });

    User.associate = function(models){
        User.hasMany(models.Survey_Answers);
    };

    return User;
};

// validate: {
//     is:{
//         args: ["^[a-z]+$",'i'],
//         msg: "Must be only letters"
//     }
// }

// ,
// validate: {
//     is:{
//         args: ["^[a-z]+$",'i'],
//         msg: "Must be only numbers"
//     }
// }