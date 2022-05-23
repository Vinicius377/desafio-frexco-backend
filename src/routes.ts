import { Router } from 'express'
import Authenticate from './middleware/EnsureAuthenticate'

import createProduct from './controllers/createProduct'
import deleteProduct from './controllers/deleteProduct'
import updateProduct from './controllers/updateProduct'
import getProduct from './controllers/getProducts'

import authenticateLogin from './controllers/authenticateLogin'
import createAccount from './controllers/createAccount'
const routes = Router()

routes.get('/product', getProduct)
routes.put('/product', Authenticate, updateProduct)
routes.delete('/product', Authenticate, deleteProduct)
routes.post('/product', Authenticate, createProduct)

routes.post('/login', authenticateLogin)
routes.post('/user', createAccount)

export default routes
