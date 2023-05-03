const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    

  id:{
  type: DATATYPES.INTEGER,
   alowNull: false,
  primaryKey: true,
  autoIncrement: true,
  
    
  
  },

   product_name: {
    type: DATATYPES.STRING,
    alowNull: false,
   },
  
   

  price :{
type: DATATYPES.DECIMAL, //Correct Syntax?
alowNull: false,
  },
Validate:{//adding Validation
  // type: DATATYPES.Decimal,
  isDecimal: true, 
  alowNull: false,


},

},
  
  

   stock: {
  type: DATATYPES.INTEGER,
  allowNull: false,
  defaultValue: 10,
  validate: {
isNumeric: true,
  },
    
},
   

  category_id: {
  type: DATATYPES.INTEGER,
    Reference:{ 
    model: 'id',
    },
  
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
