const jsonServer = require("json-server");

const app = jsonServer.create();
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(jsonServer.bodyParser);

const stock = [
  {
    id: 1,
    brand: "Ford",
    model: "Mondeo",
    year: 2020,
    price: 3000000,
  },
  {
    id: 2,
    brand: "Volkswagen",
    model: "T-Cross",
    year: 2019,
    price: 2500000,
  },
];

app.get("/api/v1/stock", (req, res) => {
  res.json({ data: stock }).end();
});

app.listen(3100, () => {
  console.log("API Mock is running.");
});
