const express = require('express')
const bodyParser = require('body-parser')
const PORT = 3000

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use('/api', require("./routes/auth"))

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
