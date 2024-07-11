const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getSignleProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
  
      if (!product) {
        res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

const saveProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      res.status(404).json({ error: "Product not found" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
    
        if (!product) {
          res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json({success : 'Product deleted successfully!'});
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  };

module.exports = {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
  getSignleProduct
};
