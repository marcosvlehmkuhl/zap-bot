import express from 'express'
import twilio from 'twilio'
import bodyParser from 'body-parser'

const MessagingResponse = twilio.twiml.MessagingResponse

const app = express()

console.log(twilio.twiml)

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/bot', (req, res) => {
  console.log(req.body)
  const twiml = new MessagingResponse()
  twiml.message('The Robots are coming! Head for the hills!')

  res.writeHead(200, { 'Content-Type': 'text/xml' })
  res.end(twiml.toString())
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
