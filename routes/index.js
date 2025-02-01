import express from 'express'
import { findaDataAPI } from '../app/services/api-external.js'

const router = express.Router()

router.get('/', async (req, res) => {

  const response = await findaDataAPI()
  const { data, status } = response

  if (status == 200) {
    return res
      .status(200)
      .send({ data })
  } else {
    return res
      .status(404)
      .send({ message: 'Not Found' })
  }
})

export default router