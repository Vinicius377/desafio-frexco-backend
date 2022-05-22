import { Request, Response } from 'express'
import ProductModel from '../../models/product-model'

async function updateProduct(req: Request, res: Response) {
  const { id, name, price, type } = req.body
  if (!id) {
    res.status(400).json({ err: 'id needed' })
    return
  }

  const updatedData = fomatedValues(name, price, type)
  try {
    await ProductModel.update(updatedData, {
      where: {
        id,
      },
    })
  } catch (e) {
    res.status(500).json({ err: 'internal error' + e })
  }
}

interface ValidatedData {
  [index: string]: string | number
}
const fomatedValues = (name: string, price: string, type: string) => {
  let objValues = {
    name,
    price: Number(price),
    type,
  }
  let validatedData: ValidatedData = {}
  for (let [key, value] of Object.entries(objValues)) {
    if (Boolean(value)) {
      validatedData[key] = value
    }
  }
  return validatedData
}

export default updateProduct
