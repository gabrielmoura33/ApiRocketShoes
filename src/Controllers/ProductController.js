import Product from '../Models/Products';
class ProductController {
  async index(req, res) {
    return res.json(Product);
  }

  async show(req, res) {
    return res.json(Product[req.params.id - 1]);
  }
}
export default new ProductController();