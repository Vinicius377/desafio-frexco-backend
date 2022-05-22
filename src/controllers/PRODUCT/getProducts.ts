import { Request, Response } from 'express'
import ProductModel from '../../models/product-model'

async function getProduct(req: Request, res: Response) {
  const data = await ProductModel.findAll({
    attributes: ['id', 'price', 'name', 'type'],
  })
  if (data) {
    res.json(200).json(data)
    return
  }
  res.json(500).json({ err: 'internal error' })
}

export default getProduct
