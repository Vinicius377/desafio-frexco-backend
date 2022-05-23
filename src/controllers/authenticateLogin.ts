import { Request, Response } from 'express'
import UserModel from '../models/user-model'
import authenticateService from '../services/authenticate-service'

async function authenticateLogin(req: Request, res: Response) {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(400).json({ err: 'insufficient information' })
    return
  }
  const data = await UserModel.findOne({
    where: {
      email,
      password,
    },
    attributes: ['name', 'id', 'email'],
  })
  if (!data) {
    res.status(401).json({ err: 'invalided credencials' })
    return
  }

  const token = authenticateService(data.email, data.name)
  if (!token) {
    res.status(500).json({ err: 'internal errror' })
    return
  }
  res.json({ token, data })
}

export default authenticateLogin
