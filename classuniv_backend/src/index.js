const Koa = require('koa');
const Router= require('koa-router');
const app = new Koa();
const api = require('./api');
const mongoose = require('mongoose');
const router = new Router();
const bodyParser = require('koa-bodyparser');

router.use('/api',api.routes());

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.port|4000;

app.listen(port,()=>{
    console.log('listening to port 4000');
});

mongoose.Promise= global.Promise;

mongoose.connect('mongodb+srv://univ:sck120@cluster0-mmifj.mongodb.net/test?retryWrites=true').then(()=>{
console.log('connected mongodb');}).catch((e)=>{
    console.error(e);
});


