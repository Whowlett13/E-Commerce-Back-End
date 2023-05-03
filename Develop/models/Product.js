// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns* `Product`

  id: {
type: DATATYPES.INTEGER,
allowNull: false,
primaryKey: true,
autoIncrement: true,

  },
 

  product_name: {
type: DATATYPES.STRING,
alowNull: false,

  },
  
  

  price: {
    type: DATATYPES.DECIMAL,
    alowNull: false,
    validate:{
isDecimal: true,
    }
  },
  

  stock:{
type: DATATYPES.INTEGER,
alowNull: false,
defaultValue: 10,
validate:{
isNumeric: true,
}

  },
  
    

  category_id: {
type: DATATYPES.INTEGER,
reference:{
Category: 'model_id',


},

  }
  
   
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
