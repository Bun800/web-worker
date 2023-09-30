const Koa = require('koa');
const app = new Koa();
const path = require('path');
const serve = require('koa-static');

app.use(serve(__dirname,{extensions:["html"]}))
if(!module.parent){
  app.listen(8000,function(){
     console.log("koa server running at port 8000");
  })	
}
// app.listen(8000);

