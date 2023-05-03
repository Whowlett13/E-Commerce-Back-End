// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");
const sequelize = require("sequelize");

// Products belongsTo Category
Category.belongsTo(Category, {
  foreignKey: "Products",
  onDelete: "CASCADE",
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "Category",
});
// Products belongToMany Tags (through ProductTag)
Products = sequelize.define('Product', {
  role: sequelize.STRING
});
Products.belongsToMany(Tags, {through: ProductTag});
const Products = await Products.create({ id:   });
await Tags.addProducts([project,   ]);


// Tags belongToMany Products (through ProductTag)


Tags = sequelize.define('ProductTag'{
  role: sequelize.String
});
Tags.belongsToMany(Products,{through: ProductTag });
const Tags = await Tags.create({ id: 11   });
await Tags.addTag([Tag,   ]);


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
