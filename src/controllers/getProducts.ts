import { Request, Response } from 'express'
import ProductModel from '../models/product-model'

async function getProduct(req: Request, res: Response) {
  try {
    const data = await ProductModel.findAll({
      attributes: ['id', 'price', 'name', 'type', 'measure', 'count'],
    })
    res.status(200).json(data)
  } catch (e) {
    res.status(500).json({ err: 'internal error' + e })
  }
}

export default getProduct
