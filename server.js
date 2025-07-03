import express from 'express'

import { Liquid } from 'liquidjs';

import { readdir, readFile } from 'node:fs/promises'

const app = express()

app.set('views', './views')

app.use(express.static('public'))

const engine = new Liquid();
app.engine('liquid', engine.express()); 

// ----Hier is de homepage---
app.get('/', async function(request, response){
    response.render('index.liquid')
})

// ---MARK: Hier is de warhammer pagina---
app.get('/warhammer', async function (request, response) {
    response.render('warhammer.liquid')
})

// ----MARK: Hier is de Spells pagina---
const api_spells = "https://www.dnd5eapi.co/api/spells/"

// hier maak ik informatie uit de spells API
const spellsResponse = await fetch(api_spells);

// nu maak ik er een JSON object van
const spellsResponseJSON = await spellsResponse.json();
// console.log(spellsResponseJSON);

// Hier zet ik de data van de spells naar de pagina
app.get('/spells', async function (request, response) {
    const spellsResponse = await fetch(api_spells);
    const spellsResponseJSON = await spellsResponse.json();
    // console.log(spellsResponseJSON);

    // hier komt de spellfilter
    const spellfilter = fetch(`${api_spells}?level=${request.params.level}`);
    

    response.render('spells_showcase.liquid', {spells: spellsResponseJSON.results});
    // console.log(spellsResponseJSON.results);
})

// MARK: spreuk details
app.get('/:index', async function (request, response) {
    const spreukResponse = await fetch(`${api_spells}${request.params.index}`)
    const spreukResponseJSON = await spreukResponse.json()

    console.log(spreukResponseJSON)

    response.render('spreuk.liquid', {spreuk: spreukResponseJSON})
})
app.use(express.urlencoded({extended: true}))

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
    console.log(`Application started on http://localhost:${app.get('port')}`)
  })

