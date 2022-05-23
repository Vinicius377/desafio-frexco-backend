import jwt from 'jsonwebtoken'

function authenticateService(email: string, name: string) {
  const token = jwt.sign({ email, name }, 'asdiojashndub1231239871y489', {
    expiresIn: '48h',
  })
  return token
}

export default authenticateService
