const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: [{ Category: Products }], //CHECK
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const CategoryId = await Category.findByPk(req.params.id, {
      include: [{ associated: Products }], //CHECK
    });
    if (!CategoryId) {
      res.status(404).json({ message: "No Category Found WIth That Id" });
      return;
    }
    res.status(200).json(CategoryId);
  } catch (err) {
    res.status(500).json(err);
  }
}); //CHECK

router.post("/", async (req, res) => {
  // create a new category
  try {
    const categories = await Category.create({
      category: req.body.category,
    });
    res.status(200).json(categories); //CHECK
  } catch (err) {
    res.status(400).json(err);
  }
}); //CHECK

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const category = await category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!category) {
      res.status(404).json({ message: "No Category Found With That Id!" });
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
