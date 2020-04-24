const jsonServer = require("json-server");

const app = jsonServer.create();
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(jsonServer.bodyParser);

app.get("/test", (req, res) => {
  res.json({ success: true }).end();
});

app.listen(3100, () => {
  console.log("API Mock is running.");
});
