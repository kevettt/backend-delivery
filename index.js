const express = require("express");
const http = require("http");
const morgan = require("morgan")
const cors = require("cors");
const { request,response } = require("express");

const usersRoutes = require('./routes/userRoutes');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
app.use(cors())
app.disable('x-powered-by')
app.set('port',port);

usersRoutes(app)

server.listen(port,() => {
  console.log("run on port:"+ port);
});

app.get('/', (req = request,res = response) => {
  res.send('Ruta raiz actualizada');
});




app.use((req=request,res = response,next,err) => {
  console.log(err);
  res.status(err.status || 500).send(err.status);
})