const params = new URLSearchParams(window.location.search)
const eventId = params.get('id')

console.log(eventId)

const selectedEvent = ticketEvents.find(ticket => ticket.id == eventId)
console.log(selectedEvent)

const title = document.querySelector('#eventTitle')
title.textContent = selectedEvent.nomeEvento

const parti = selectedEvent.dataTitolo.split(' ')
const date = parti[0]
const category = parti[1]