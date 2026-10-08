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
sfondoEvento.style.backgroundImage = `url(${selectedEvent.imgEvento})`

const contenitoreTi = document.querySelector('#seeAlsoTickets')

for (let ticket of ticketEvents) {
    ticketSplit = ticket.dataTitolo.split(' ')
    let categoriaDue = ticketSplit[1]
    if (categoriaDue === category && ticket.nomeEvento !== selectedEvent.nomeEvento) {
        let div = document.createElement('div')
        div.classList.add('contenitoreTicketsSeeAlso', 'd-flex')
        div.dataset.eventId = ticket.id

        div.addEventListener('click', () => {
            window.location.href = `event.html?id=${ticket.id}`
        })

        div.innerHTML = `
    <div class="imgTicket">
                <img src="${ticket.img}" alt="" class="w-100">
            </div>

            <div class="Ticket">
                <div class="redBar d-flex justify-content-center align-items-center">
                    <p>${ticket.dataTitolo}</p>
                </div>

                <div class="bodyTicket">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                        <h3>${ticket.nomeEvento}</h3>
                        <p>${ticket.artisti}</p>
                    </div>
                </div>
            </div>
            <div class="plusTicket d-flex flex-column">
                <div class="d-flex justify-content-center align-items-center">
                    <p>${ticket.prezzo === 'FREE' ? 'FREE' : ticket.prezzo + ' €'}</p>
                </div>

                <div class="d-flex align-items-center justify-content-center">
                    <img src="img/plus.svg" alt="" width="72px" height="72px">
                </div>
            </div>
    
    `
        contenitoreTi.append(div)
    }
}