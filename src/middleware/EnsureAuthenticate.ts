import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

const JWTSECRET = '1040ec472c58101780cd6fd9d0f36b47'

export function authenticateAdm(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization
  if (!authToken) {
    res.status(401).json({ err: 'unauthorized' })
    return
  }

  const [, token] = authToken.split(' ')
  jwt.verify(token, process.env.JWTSECRET || JWTSECRET, err => {
    if (err) {
      res.status(401).json({ err: 'invalid token' })
      return
    }
    next()
  })
}

export default authenticateAdm
