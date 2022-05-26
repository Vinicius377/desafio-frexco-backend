import jwt from 'jsonwebtoken'

const JWTSECRET = '1040ec472c58101780cd6fd9d0f36b47'

function authenticateService(email: string, id: string) {
  const token = jwt.sign({ email, id }, process.env.JWTSECRET || JWTSECRET, {
    expiresIn: '48h',
  })
  return token
}

export default authenticateService
