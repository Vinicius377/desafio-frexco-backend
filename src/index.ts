import express from 'express'
import routes from './routes'
import { openDb } from './database/sqliteConfig'

const PORT = process.env.PORT || 2000
const app = express()

openDb()
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
  console.log('server is running at port ' + PORT)
})
