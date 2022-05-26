import { Router } from 'express'
import authenticateAdm from './middleware/EnsureAuthenticate'
import authenticate from './controllers/authenticate'

import createProduct from './controllers/createProduct'
import deleteProduct from './controllers/deleteProduct'
import updateProduct from './controllers/updateProduct'
import getProduct from './controllers/getProducts'

import authenticateLogin from './controllers/authenticateLogin'
import createAccount from './controllers/createAccount'
const routes = Router()

routes.get('/product', getProduct)
routes.put('/product', authenticateAdm, updateProduct)
routes.delete('/product', authenticateAdm, deleteProduct)
routes.post('/product', authenticateAdm, createProduct)

routes.post('/login', authenticateLogin)
routes.post('/signin', createAccount)
routes.get('/auth', authenticate)

export default routes
