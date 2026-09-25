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

let contenitore = document.querySelector('#due .swiper-wrapper')
let cards = [cardnews1, cardnews2, cardnews3, cardnews4]

if (contenitore) {

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

    if (primaSlide) {
        primaSlide.id = 'primaSlideNews'
    }
}


//CLASSE E ISTANZE TICKETS IN HOME
class TicketsHome {
    constructor(dataTitolo, nomeEvento, artisti, prezzo, img) {
        this.dataTitolo = dataTitolo
        this.nomeEvento = nomeEvento
        this.artisti = artisti
        this.prezzo = prezzo
        this.img = img
    }
}

let ticket1 = new TicketsHome('03.05 WORKSHOP', 'Visual Identity Lab', 'Luca Moretti / Sofia Van Dijk', 25, 'img/card_ticket1.webp')
let ticket2 = new TicketsHome('03.05 TALK', 'Designing new Perspectives', 'Arthur Bellamy / Lina Kovacs / Eva Rossetti', 'FREE', 'img/card_ticket2.webp')
let ticket3 = new TicketsHome('04.05 INSTALLATION', 'Sonic Territories', 'Aya Nakamura', 10, 'img/card_ticket3.webp')
let ticket4 = new TicketsHome('04.05 PERFORMANCE', 'Motion in Space', 'Leon Hartmann', 15, 'img/card_ticket4.webp')
let ticket5 = new TicketsHome('05.05 TALK', 'The future of Art', 'Noah Visser', 'FREE', 'img/card_ticket5.webp')
let ticket6 = new TicketsHome('05.05 WORKSHOP', 'Typography Lab', 'Thomas Vermeer / Sofia Van Dijk', 25, 'img/card_ticket6.webp')
let ticket7 = new TicketsHome('06.05 PERFORMANCE', 'Deep Listening', 'Aya Nakamura', 15, 'img/card_ticket7.webp')
let ticket8 = new TicketsHome('06.05 INSTALLATION', 'Fragments of Identity', 'Alena Rodrigo', 10, 'img/card_ticket8.webp')
let ticket9 = new TicketsHome('07.05 WORKSHOP', 'Creative Coding', 'Leon Hartmann', 25, 'img/card_ticket9.webp')
let ticket10 = new TicketsHome('08.05', 'Final Event', '', 'FREE', 'img/card_ticket10.webp')

let tickets = [ticket1, ticket2, ticket3]
let ticketEvents = [ticket1, ticket2, ticket3, ticket4, ticket5, ticket6, ticket7, ticket8, ticket9, ticket10]
let contenitoreT = document.querySelector('#appendTickets')

if (contenitoreT && !document.querySelector('#heroEvents')) {

    for (let ticket of tickets) {
        let div = document.createElement('div')
        div.classList.add('d-flex')
        div.id = 'contenitoreTickets'

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

        contenitoreT.append(div)
    }

} else if (contenitoreT && document.querySelector('#heroEvents')) {

    for (let ticket of ticketEvents) {
        let div = document.createElement('div')
        div.classList.add('d-flex')
        div.id = 'contenitoreTickets'

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

        contenitoreT.append(div)
    }
}


//CLASSE E ISTANZE GALLERY IN ABOUT
class CardGallery {
    constructor(img, data) {
        this.img = img
        this.data = data
    }
}

let cardgallery1 = new CardGallery('img/unoEdPre.webp', '08.05.2025')
let cardgallery2 = new CardGallery('img/dueEdPre.webp', '08.05.2025')
let cardgallery3 = new CardGallery('img/treEdPre.webp', '07.05.2025')
let cardgallery4 = new CardGallery('img/quattroEdPre.webp', '06.05.2025')
let cardgallery5 = new CardGallery('img/cinqueEdPre.webp', '06.05.2025')
let cardgallery6 = new CardGallery('img/seiEdPre.webp', '05.05.2025')

let cardsGallery = [cardgallery1, cardgallery2, cardgallery3, cardgallery4, cardgallery5, cardgallery6]

let contGallery = document.querySelector('#galleryPrecedenti .swiper-wrapper')

if (contGallery) {

    for (let card of cardsGallery) {
        let div = document.createElement('div')
        div.classList.add('swiper-slide')
        div.innerHTML = `
                                <div class="cardGallery">
                                    <img src="${card.img}" alt="">
                                    <p>${card.data}</p>
                                </div>
        `
        contGallery.append(div)
    }
}

//CLASSE E ISTANZE CARD ARTISTI IN ARTISTS
class CardArtisti {
    constructor(img, nome, tipo) {
        this.img = img
        this.nome = nome
        this.tipo = tipo
    }
}

let cardartista1 = new CardArtisti('img/artista1.webp', 'Luca Moretti', 'Visual artist')
let cardartista2 = new CardArtisti('img/artista1.webp', 'Luca Moretti', 'Visual artist')
let cardartista3 = new CardArtisti('img/artista1.webp', 'Luca Moretti', 'Visual artist')
let cardartista4 = new CardArtisti('img/artista1.webp', 'Luca Moretti', 'Visual artist')
let cardartista5 = new CardArtisti('img/artista1.webp', 'Luca Moretti', 'Visual artist')
let cardartista6 = new CardArtisti('img/artista1.webp', 'Luca Moretti', 'Visual artist')
let cardartista7 = new CardArtisti('img/artista1.webp', 'Luca Moretti', 'Visual artist')
let cardartista8 = new CardArtisti('img/artista1.webp', 'Luca Moretti', 'Visual artist')
let cardartista9 = new CardArtisti('img/artista1.webp', 'Luca Moretti', 'Visual artist')
let cardartista10 = new CardArtisti('img/artista1.webp', 'Luca Moretti', 'Visual artist')
let cardartista11 = new CardArtisti('img/artista1.webp', 'Luca Moretti', 'Visual artist')

let cardsartisti = [cardartista1, cardartista2, cardartista3, cardartista4, cardartista5, cardartista6, cardartista7, cardartista8, cardartista9, cardartista10, cardartista11]
let contArtisti = document.querySelector('#mainArtisti')

if (contArtisti && document.querySelector('#heroArtists')) {
    for (let card of cardsartisti) {
        contArtisti.innerHTML += `
        <div class="d-flex flex-column">
                            <div>
                                <img src="${card.img}" alt="" class="w-100">
                            </div>
                            <div class="d-flex justify-content-between fasciaCardArtisti">
                                <div class="d-flex flex-column">
                                    <p>${card.nome}</p>
                                    <p>${card.tipo}</p>
                                </div>
                                <div><img src="img/arrow.svg" alt=""></div>
                            </div>
                        </div>
        `
    }
}

