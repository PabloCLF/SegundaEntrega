import express from "express";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";

import "./db/configDB.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

app.listen(8080, () => {
    console.log("Escuchando al puerto 8080");
  });