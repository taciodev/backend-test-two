import productsJson from "../../../db.json";
import { Request, Response } from "express";

import { Product } from "../../models/products.model";
import { IProduct } from "../../types/products.types";

export const postProducts = async (req: Request, res: Response) => {
  const request = productsJson;
  let products = [];

  try {
    for (let item of request) {
      let json: IProduct = await Product.create(item);
      products.push(json);
    }
    res.status(201).json({ message: products });
  } catch (err) {
    res.status(500).json({ message: "User is not defined" });
  }
}