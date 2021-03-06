import { Request, Response } from 'express'
import ProductModel from '../models/product-model'

interface InputValues {
  [key: string]: string
}

async function createProduct(req: Request, res: Response) {
  const { name, type, price, count, measure }: InputValues = req.body
  if (!name || !type || !price) {
    res.status(400).json({ err: 'insufficient information' })
    return
  }
  const newProduct = {
    name,
    type,
    price: Number(price.replace(',', '.')),
    count: Number(count),
    measure,
  }
  try {
    const data = await ProductModel.create(newProduct)

    res.status(201).json(data)
  } catch (e) {
    res.status(500).json({ err: 'internal error' + e })
  }
}

export default createProduct
