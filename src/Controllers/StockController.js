import Stock from '../Models/Stock';
class StockController {
  async index(req, res) {
    return res.json(Amount);
  }

  async show(req, res) {
    return res.json(Amount[req.params.id]);
  }
}
export default new StockController();