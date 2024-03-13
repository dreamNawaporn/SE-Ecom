/**
 * @swagger
 * components:
 *  schemas:
 *    CartItemSchema:
 *          type: object
 *          required:
 *            -   cart itemId
 *            -   name 
 *            -   email
 *            -   image
 *            -   quantly
 *          properties:
 *            cart itemId:
 *                type: string
 *                description:  The cart itemId of  the product
 *            name:
 *                type: number
 *                description:  The name of  the product
 *            email:
 *                type:  string
 *                description:  The email of the product
 *            image:
 *                type: string
 *                description:  The image of  the product
 *            quantly:
 *                type: string
 *                description:  The quantly  of  the product
 *          example:
 *                cart itemId:    "60c5xxxxx"
 *                name: "Macbook  Pro"
 *                email:  3000
 *                description:  "A  great laptop"
 *                image:  "http://example.come/macbook.jpg"
 *                quantly: "Electronics"
 * tags:
 *  name:  CartItemSchema
 *  description: the products  managing  API
 */
const express = require("express");
const router = express.Router();
const ProductModel = require("../models/Product.model");

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve  a list  of  product
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *              application/json:
 *                schema:
 *                      type: array
 *                      items:
 *                            $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some  error happened
 */

router.get("/", async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get product by  id
 *     tags: [Product]
 *     parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              schema:
 *                  type: string
 *              description:  The product Id
 *     responses:
 *       200:
 *         description: The Product by  Id.
 *         content:
 *              application/json:
 *                schema:
 *                      type: array
 *                      items:
 *                            $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product Not Found
 *       500:
 *         description: Some  error happened
 */

router.get("/:email", async (req, res) => {
    const { email } = req.body
    try {
        const productId = req.params.id;
        const products = await ProductModel.findById(productId);
        if (!products) {
            return res.status(404).json({ message: "Product Not Found" });
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


/**
 * @swagger
 * /products/{id}:
 *   post:
 *     summary: Get product by  id
 *     tags: [Product]
 *     parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              schema:
 *                  type: string
 *              description:  The product Id
 *     responses:
 *       200:
 *         description: The Product by  Id.
 *         content:
 *              application/json:
 *                schema:
 *                      type: array
 *                      items:
 *                            $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product Not Found
 *       500:
 *         description: Some  error happened
 */
router.post("/", async (req, res) => {
    const cart = req.body;
    try {
        const existingCart = await CartItemModel.findOne({
            productId: cart.productId,
            email: cart.email,
        });
        if (existingCart) {
            existingCart.quantity += cart.quantity
            await existingCart.save();
            return res.status(200)
        }
        const newCart = new CartModel(cart);
        await newCart.save();
        res.status(201).json(newCart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



router.put("/", async (rep, res) => {
    const cart = req.body;
    try {
        const existingCart = await CartItemModel.findOne({
            productId: cart.productId,
            email: cart.email,
        });
        if (existingCart) {
            existingCart.quantity += cart.quantity
            await existingCart.save();
            return res.status(200)
        }
        const newCart = new CartModel(cart);
        await newCart.save();
        res.status(201).json(newCart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});