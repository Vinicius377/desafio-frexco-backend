import { Request, Response } from 'express'
import ProductModel from '../models/product-model'

async function createProduct(req: Request, res: Response) {
  const { name, type, price, count } = req.body
  if (!name || !type || !price) {
    res.status(400).json({ err: 'insufficient information' })
    return
  }
  try {
    await ProductModel.create({
      name,
      type,
      price,
      count,
    })
    res.status(200).json({ message: 'product created' })
  } catch (e) {
    res.status(500).json({ err: 'internal error' + e })
  }
}

export default createProduct
