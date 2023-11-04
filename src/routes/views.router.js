import { Router } from "express";
import { cartsManager } from "../managers/cartsManager.js";
import { productsManager } from "../managers/productsManager.js";
const router = Router();

router.get("/products", async (req, res) => {
  const products = await productsManager.findAll();
  res.render("products", {  products: products.results});
});

router.get("/carts/:cartId", async (req, res) => {
    const cart = cartsManager.findCartById(req.params.cartId);
    res.render("carts", {  products: cart.products});
  });
export default router;