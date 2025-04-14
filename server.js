import express from 'express'

import { Liquid } from 'liquidjs';

import { readdir, readFile } from 'node:fs/promises'

console.log(files)

const app = express()

app.set('views', './views')

app.use(express.static('public'))

const engine = new Liquid();
app.engine('liquid', engine.express()); 

// ----Hier is de homepage---
app.get('/', async function(request, response){
    response.render('index.liquid', {files: files})
})

app.get('/:slug', async function(req, res) {
    console.log(req.params.slug)
    const fileContents = await readFile('/' + req.params.slug + '.md', { encoding: 'utf8' })
    res.render('artikel.liquid', {fileContent: fileContents})
  })

// ---Hier is de warhammer pagina---
app.get('/warhammer', async function (request, response) {
    response.render('warhammer.liquid')
})

app.use(express.urlencoded({extended: true}))

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
    console.log(`Application started on http://localhost:${app.get('port')}`)
  })
  