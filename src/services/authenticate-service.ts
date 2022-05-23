import jwt from 'jsonwebtoken'

function authenticateService(email: string, name: string) {
  if (!process.env.JWTSECRET) {
    throw new Error('need JWTSECRET')
  }
  const token = jwt.sign({ email, name }, process.env.JWTSECRET, {
    expiresIn: '48h',
  })
  return token
}

export default authenticateService
