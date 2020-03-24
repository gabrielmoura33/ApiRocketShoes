"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Products = require('../Models/Products'); var _Products2 = _interopRequireDefault(_Products);
class ProductController {
  async index(req, res) {
    return res.json(_Products2.default);
  }

  async show(req, res) {
    return res.json(_Products2.default[req.params.id - 1]);
  }
}
exports. default = new ProductController();