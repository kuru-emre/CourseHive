import cors from 'cors'
import express from 'express'

const app = express()
const PORT = 52635

app.use(cors({ origin: '*' }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(PORT, () => {
  return console.log(`Server is listening on ${PORT}`)
})
