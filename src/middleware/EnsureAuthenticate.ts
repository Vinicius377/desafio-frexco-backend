import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

export function Authenticate(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization
  if (!authToken) {
    res.status(401).json({ err: 'unauthorized' })
    return
  }
  if (!process.env.JWTSECRET) {
    throw new Error('need JWTSECRET')
  }
  const [, token] = authToken.split(' ')
  jwt.verify(token, process.env.JWTSECRET, err => {
    if (err) {
      res.status(401).json({ err: 'invalid token' })
      return
    }
    next()
  })
}

export default Authenticate
