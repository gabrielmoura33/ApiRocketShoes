import Stock from '../Models/Stock';
class StockController {
  async index(req, res) {
    return res.json(Stock);
  }

  async show(req, res) {
    return res.json(Stock[req.params.id - 1]);
  }
}
export default new StockController();