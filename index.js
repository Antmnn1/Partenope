//CLASSE E ISTANZE CARD LATEST NEWS
class CardNews {
    constructor(dataTitolo, contenuto) {
        this.dataTitolo = dataTitolo
        this.contenuto = contenuto
    }
}

let cardnews1 = new CardNews('03.05 EVENTS ANNOUNCED', 'The wait is over: the Partenope Festival events programme is now live. Explore the exhibitions, talks, performances, workshops, and special events taking place throughout the festival. Discover what inspires you, choose your experiences, and get ready to be part of this year’s creative journey.')
let cardnews2 = new CardNews('27.03 ARTISTS REVEALED', 'Meet the artists shaping this year’s Partenope Festival. The full list of participating artists has just been revealed, offering a first glimpse into the diverse voices, visions, and practices that will define this edition. Explore their work and discover the creative minds behind the festival.')
let cardnews3 = new CardNews('16.12 FESTIVAL DATES', 'Mark your calendar: Partenope Festival begins on May 3rd. A new edition of contemporary visual arts is ready to unfold, bringing together artists, ideas, and experiences across the city. Discover the programme, explore the venues, and join us as Partenope comes to life.')
let cardnews4 = new CardNews('01.01 OPEN CALLS', 'Partenope Festival open calls are now open. From January 1st to January 31st, artists and creatives are invited to submit their work and become part of the festival. Discover the call, explore the requirements, and take your chance to contribute to the next edition of Partenope.')

let contenitore = document.querySelector('.swiper-wrapper')
let cards = [cardnews1, cardnews2, cardnews3, cardnews4]

for (let card of cards) {
    let div = document.createElement('div')
    div.classList.add('swiper-slide')
    div.innerHTML = `
                            <div class="cardNews">
                                <div class="cardNews">
                                    <p class="titoloNews m-0">${card.dataTitolo}</p>
                                    <p class="contentNews m-0">${card.contenuto}</p>
                                </div>
                            </div>
    `
    contenitore.append(div)
}

let primaSlide = contenitore.querySelector('.swiper-slide')
primaSlide.id = 'primaSlideNews'

//CLASSE E ISTANZE TICKETS IN HOME
class TicketsHome {
    constructor(dataTitolo, nomeEvento, artisti, prezzo,img) {
        this.dataTitolo = dataTitolo
        this.nomeEvento = nomeEvento
        this.artisti = artisti
        this.prezzo = prezzo
        this.img=img
    }
}

let ticket1 = new TicketsHome('03.05 WORKSHOP','Visual Identity Lab','Luca Moretti / Sofia Van Dijk',25,'img/card_ticket1.webp')
let ticket2 = new TicketsHome('03.05 TALK','Designing new Perspectives','Arthur Bellamy / Lina Kovacs / Eva Rossetti','FREE','img/card_ticket2.webp')
let ticket3 = new TicketsHome('04.05 INSTALLATION','Sonic Territories','Aya Nakamura',10,'img/card_ticket3.webp')

let tickets =[ticket1,ticket2,ticket3]
let contenitoreT = document.querySelector('#appendTickets')

for(let ticket of tickets){
    let div = document.createElement('div')
    div.classList.add('d-flex')
    div.id = 'contenitoreTickets'
    div.innerHTML=`
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
    contenitoreT.append(div)
}