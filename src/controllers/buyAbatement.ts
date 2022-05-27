import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import ProductModel from '../models/product-model'

interface Cart {
  cart: {
    id: string
    count: number
  }[]
}

const JWTSECRET = '1040ec472c58101780cd6fd9d0f36b47'

async function buyAbatement(req: Request, res: Response) {
  const authToken = req.headers.authorization
  const { cart }: Cart = req.body

  console.log(req.body)

  if (!authToken) {
    res.status(401).json({ err: 'needed  be logged' })
    return
  }

  if (!cart) {
    res.status(400).json({ err: 'needed have itens in cart' })
    return
  }

  const [, token] = authToken?.split(' ') as string[]

  jwt.verify(token, process.env.JWTSECRET || JWTSECRET, err => {
    if (err) {
      res.status(401).json({ err: 'invalid token' })
      return
    }
  })

  cart.forEach(async item => {
    await ProductModel.decrement('count', {
      where: {
        id: item.id,
      },
      by: item.count,
    })
  })
  res.status(200).json({ message: 'success buy' })
}

export default buyAbatement
