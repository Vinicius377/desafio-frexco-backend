import { Request, Response } from 'express'
import UserModel from '../models/user-model'

async function createAccount(req: Request, res: Response) {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    res.status(400).json({ err: "'insufficient information" })
    return
  }

  try {
    const [user, created] = await UserModel.findOrCreate({
      where: {
        email,
      },
      defaults: {
        email,
        name,
        password,
      },
    })
    if (created) {
      res.status(200).json({ message: 'created new account' })
    } else {
      res.status(400).json({ message: 'there is a account with this email' })
    }
  } catch (e) {
    res.status(500).json({ err: 'internal error ' + e })
  }
}

export default createAccount
