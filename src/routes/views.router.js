import { Router } from "express";
import { cartsManager } from "../managers/cartsManager.js";
import { productsManager } from "../managers/productsManager.js";
const router = Router();

router.get("/products", async(req, res) => {

    try {
        const result = await productsManager.findAll(req.query);
        console.log(result.payload)
        res.render("products", {
            products: (result.payload)
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/carts/:cartId", async(req, res) => {
    const cart = cartsManager.findCartById(req.params.cartId);
    res.render("carts", { products: cart.products });
});
export default router;