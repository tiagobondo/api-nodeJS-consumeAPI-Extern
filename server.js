import http from 'node:http'
import app from './app.js'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT
const server = http.createServer(app)

server.listen(port, () => {
  console.log(`Server Starting at http://localhost:${port}`)
})