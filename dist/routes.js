"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _serverjson = require('./Models/server.json'); var _serverjson2 = _interopRequireDefault(_serverjson);
var _ProductController = require('./Controllers/ProductController'); var _ProductController2 = _interopRequireDefault(_ProductController);
var _StockController = require('./Controllers/StockController'); var _StockController2 = _interopRequireDefault(_StockController);
const routes = _express.Router.call(void 0, );


routes.get('/', (req, res) => {
  return res.json(_serverjson2.default);
});

routes.get('/products', _ProductController2.default.index);
routes.get('/products/:id', _ProductController2.default.show);

routes.get('/stock', _StockController2.default.index);
routes.get('/stock/:id', _StockController2.default.show);

exports. default = routes;