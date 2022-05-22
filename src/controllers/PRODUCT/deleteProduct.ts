import { Request, Response } from 'express'
import ProductModel from '../../models/product-model'

async function deleteProduct(req: Request, res: Response) {
  const { id } = req.body
  if (!id) {
    res.status(400).json({ err: 'id needed' })
    return
  }
  try {
    await ProductModel.destroy({
      where: {
        id,
      },
    })
    res.status(200).json({ err: 'product deleted' })
  } catch (e) {
    res.status(500).json({ err: 'internal error' })
  }
}

export default deleteProduct
