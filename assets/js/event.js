const params = new URLSearchParams(window.location.search)
const eventId = params.get('id')

console.log(eventId)

const selectedEvent = ticketEvents.find(ticket => ticket.id == eventId)
console.log(selectedEvent)

const parti = selectedEvent.dataTitolo.split(' ')
const date = parti[0]
const category = parti[1]
const time = selectedEvent.ora

// prendo titolo
const title = document.querySelector('#eventTitle')
title.textContent = selectedEvent.nomeEvento

// prendo data e ora
const dateTime = document.querySelector("#eventDateTime")
dateTime.textContent = `${date} at ${selectedEvent.ora}`

//prendo artisti
const art = document.querySelector('#artista')
art.textContent = selectedEvent.artisti

//prendo categoria
const categoria = document.querySelector('#cat')
categoria.textContent = `${category}`

//prendo prezzo
const prezzo = document.querySelector('#prezzo')
prezzo.textContent = selectedEvent.prezzo == "FREE" ? "FREE" : selectedEvent.prezzo + "€"

//prendo immagine evento
const sfondoEvento = document.querySelector('.sfondoEvento')
sfondoEvento.style.backgroundImage = `url(../${selectedEvent.imgEvento.replace(/^(\.\.\/)+/, '')})`


// SEE ALSO: ticket della stessa categoria, escluso quello che sto guardando
const contenitoreTi = document.querySelector('#seeAlsoTickets')

const simili = ticketEvents.filter(ticket => {
    let categoriaDue = ticket.dataTitolo.split(' ')[1]
    return categoriaDue === category && ticket.nomeEvento !== selectedEvent.nomeEvento
})

// disegna i ticket giusti per la larghezza attuale (true = sono quelli "See also")
disegnaTickets(contenitoreTi, simili, true)

// quando la finestra attraversa i 992px ridisegno
mqDesktop.addEventListener('change', () => {
    disegnaTickets(contenitoreTi, simili, true)
})