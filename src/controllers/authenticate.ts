import jwt, { JwtPayload } from 'jsonwebtoken'
import { Request, Response } from 'express'
import UserModel from '../models/user-model'

const JWTSECRET = '1040ec472c58101780cd6fd9d0f36b47'

interface TokenPayload {
  exp: number
  accessTypes: string[]
  id: string
  email: number
}

export async function authenticate(req: Request, res: Response) {
  const authToken = req.headers.authorization

  if (!authToken) {
    res.status(401).json({ err: 'unauthorized' })
    return
  }

  const [, token] = authToken.split(' ')
  const decoded = jwt.verify(token, process.env.JWTSECRET || JWTSECRET)
  console.log(decoded)
  const { id } = decoded as TokenPayload

  const data = await UserModel.findOne({
    where: {
      id,
    },
    attributes: ['name', 'id', 'email', 'hash', 'salt', 'isAdm'],
  })

  res.status(200).json(data)
}

export default authenticate
