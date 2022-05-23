import { Request, Response } from 'express'
import UserModel from '../models/user-model'
import crypto from 'crypto'

async function createAccount(req: Request, res: Response) {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    res.status(400).json({ err: "'insufficient information" })
    return
  }

  const [salt, passwordHash] = setPassword(password)

  console.log('salt', salt, typeof salt)
  try {
    const [user, created] = await UserModel.findOrCreate({
      where: {
        email,
      },
      defaults: {
        email,
        name,
        salt,
        hash: passwordHash,
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

const setPassword = (password: string) => {
  const salt = crypto.randomBytes(16).toString('hex')

  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
    .toString(`hex`)

  return [salt, hash]
}

export default createAccount
