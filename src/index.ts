import express from 'express'
import routes from './routes'
import 'dotenv/config'
import sequelize from './config/database'
import cors from 'cors'

sequelize
  .sync()
  .then(() => console.log('syncronized database'))
  .catch(e => console.log(e))
const PORT = process.env.PORT || 2222
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
  console.log('server is running at port ' + PORT)
})
