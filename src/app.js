const app = require('./server')

const port = process.env.SERVER_PORT || 5000

app.listen(port, ()=> console.log(`Server started http://localhost:${port}`))
