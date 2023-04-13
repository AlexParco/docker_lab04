const express = require('express')
const bodyParse = require('body-parser')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 5000
app.set('view engine', 'ejs');


const productos = [
    {id: 1, nombre: 'Manzana'},
    {id: 2, nombre: 'Pera'},
    {id: 3, nombre: 'Papaya'}
]

const clientes = [
    {id: 1, nombre: 'Alexander Parco', productos: [productos[0], productos[1]]},
    {id: 2, nombre: 'Alonso Parco', productos: [productos[2], productos[1]]},
    {id: 3, nombre: 'Jose Palomino', productos: [productos[1], productos[0]]}
]


app.use(bodyParse.json())
app.use(bodyParse.urlencoded({
  extended: true
}))
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hola Soy Alexander Parco!')
})

app.get('/clientes', (req, res) => {
    res.render('clientes', {clientes})
})

app.get('/productos', (req,res) => {
    res.render('productos', {productos})
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})
