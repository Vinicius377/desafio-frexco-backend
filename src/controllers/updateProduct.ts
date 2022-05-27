import { Request, Response } from 'express'
import ProductModel from '../models/product-model'

async function updateProduct(req: Request, res: Response) {
  const { id, name, price, type, count, measure } = req.body
  if (!id) {
    res.status(400).json({ err: 'id needed' })
    return
  }

  const updatedData = fomatedValues(name, price, type, count, measure)
  try {
    await ProductModel.update(updatedData, {
      where: {
        id,
      },
    })
    res.status(200).json({ message: 'updated product' })
  } catch (e) {
    res.status(500).json({ err: 'internal error' + e })
  }
}

interface ValidatedData {
  [index: string]: string | number
}
const fomatedValues = (
  name: string,
  price: string,
  type: string,
  count: string,
  measure: string
) => {
  let objValues = {
    name,
    price: Number(price.replace(',', '.')),
    type,
    count: Number(count),
    measure,
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
