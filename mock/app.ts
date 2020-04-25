const jsonServer = require("json-server");

const app = jsonServer.create();
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(jsonServer.bodyParser);

let stock = [
  {
    id: 1,
    brand: "Ford",
    model: "Mondeo",
    year: 2020,
    price: 3000000,
    description:
      "La unión perfecta entre tecnología, sofisticación, rendimiento y eficiencia, diseño innovador e ingeniería de precisión, el Mondeo está creado para inspirar.",
  },
  {
    id: 2,
    brand: "Volkswagen",
    model: "T-Cross",
    year: 2019,
    price: 2500000,
    description:
      " El Nuevo T-Cross obtuvo la calificación máxima en las pruebas Latin NCAP, convirtiéndose en uno de los vehículos más seguros de la región, con 5 estrellas en la protección para adultos y la misma cantidad en seguridad para niños.",
  },
];

app.get("/api/v1/stock", (req, res) => {
  res.json({ data: stock }).end();
});

app.get("/api/v1/stock/:id", (req, res) => {
  const vehicle = stock.find((stock) => stock.id === +req.params.id);

  if (vehicle) {
    res.json({ data: vehicle }).end();

    return;
  }

  res.status(500).end();
});

app.post("/api/v1/book", (req, res) => {
  const vehicle = stock.find((stock) => stock.id === req.body.id);

  console.log(req.body);

  if (vehicle && req.body.id) {
    stock.splice(stock.indexOf(vehicle), 1);

    res.json({ success: true }).end();
  }

  res.status(500).end();
});

app.listen(3100, () => {
  console.log("API Mock is running.");
});
