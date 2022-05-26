import { Request, Response } from 'express'
import crypto from 'crypto'

import UserModel from '../models/user-model'
import authenticateService from '../services/authenticate-service'

async function authenticateLogin(req: Request, res: Response) {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(400).json({ err: 'insufficient information' })
    return
  }

  const query = await UserModel.findOne({
    where: {
      email,
    },
    attributes: ['name', 'id', 'email', 'hash', 'salt', 'isAdm'],
  })
  if (!query) {
    res.status(401).json({ err: 'invalided credencials' })
    return
  }

  const hash = crypto
    .pbkdf2Sync(password, query.salt, 1000, 64, `sha512`)
    .toString(`hex`)

  if (!(hash === query.hash)) {
    res.status(401).json({ err: 'invalided credencials' })
    return
  }

  if (!query.id) return

  const token = authenticateService(query.email, query.id)
  if (!token) {
    res.status(500).json({ err: 'internal errror' })
    return
  }
  const data = {
    name: query.name,
    email: query.email,
    id: query.id,
    isAdm: query.isAdm,
  }
  res.json({ token, data })
}

export default authenticateLogin
