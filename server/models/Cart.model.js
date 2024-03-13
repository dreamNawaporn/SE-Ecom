const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const CartItemSchema = new Schema(
  {
    name: { type: String.Types.ObjectId, ref: "p"  },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);
const CartItemModel = model("Cart", CartItemSchema);
module.exports = CartModel;