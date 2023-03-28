const Koa = require("koa");
const app = new Koa();

// response
app.use((ctx) => {
  if (ctx.request.path === "/") {
    ctx.response.body = "<h1>Index page</h1>";
  } else if (ctx.request.path === "/about") {
    ctx.response.body = "<h1>About page</h1>";
  } else if (ctx.request.path === "/contact") {
    ctx.response.body = "<h1>Contact page</h1>";
  }
});

const port = 3000;

app.listen(port, function () {
  console.log(`Sunucu port ${port} başlatıldı`);
});
