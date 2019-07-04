const Router = require('koa-router');
const api = new Router();
const ctrl = require('./sample.ctrl');


api.post('/insert',ctrl.insert);
api.post('/find',ctrl.find);

module.exports= api;

