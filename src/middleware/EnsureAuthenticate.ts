import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

export function Authenticate(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization
  if (!authToken) {
    res.status(401).json({ err: 'unauthorized' })
    return
  }
  const [, token] = authToken.split(' ')
  jwt.verify(token, 'n18nd8712ehnd128j32489', (err, data) => {
    if (err) {
      res.status(401).json({ err: 'unauthorized' })
      return
    }
    next()
  })
}

export default Authenticate
