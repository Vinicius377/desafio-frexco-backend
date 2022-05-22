import { Request, Response } from 'express'
import ProductModel from '../../models/product-model'

async function createProduct(req: Request, res: Response) {
  const { name, type, price } = req.body
  if (!name || !type || !price) {
    res.status(400).json({ err: 'insufficient information' })
    return
  }
  try {
    await ProductModel.create({
      name,
      type,
      price,
    })
  } catch (e) {
    res.status(500).json({ err: 'internal error' + e })
  }
}
