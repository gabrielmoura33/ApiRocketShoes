"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Stock = require('../Models/Stock'); var _Stock2 = _interopRequireDefault(_Stock);
class StockController {
  async index(req, res) {
    return res.json(_Stock2.default);
  }

  async show(req, res) {
    return res.json(_Stock2.default[req.params.id - 1]);
  }
}
exports. default = new StockController();