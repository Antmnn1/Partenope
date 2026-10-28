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
                                <div class="wrapCardNews">
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


//CLASSE E ISTANZE TICKETS
class TicketsHome {
    constructor(id, dataTitolo, ora, nomeEvento, artisti, prezzo, img, imgEvento) {
        this.id = id
        this.dataTitolo = dataTitolo
        this.giorno = dataTitolo.split('.')[0]
        this.tipo = dataTitolo.split(' ')[1].toLowerCase()
        this.ora = ora
        this.nomeEvento = nomeEvento
        this.artisti = artisti
        this.prezzo = prezzo
        this.img = img
        this.imgEvento = imgEvento
    }
}

let ticket1 = new TicketsHome(1, '03.05 WORKSHOP', '10:00', 'Visual Identity Lab', 'Luca Moretti / Sofia Van Dijk', 25, 'assets/img/card_ticket1.webp', 'assets/img/imgEvento1.webp')
let ticket2 = new TicketsHome(2, '03.05 TALK', '15:00', 'Designing new Perspectives', 'Arthur Bellamy / Lina Kovacs / Eva Rossetti', 'FREE', 'assets/img/card_ticket2.webp', 'assets/img/imgEvento2.webp')
let ticket3 = new TicketsHome(3, '04.05 INSTALLATION', '10:00', 'Sonic Territories', 'Aya Nakamura', 10, 'assets/img/card_ticket3.webp', 'assets/img/imgEvento3.webp')
let ticket4 = new TicketsHome(4, '04.05 PERFORMANCE', '15:00', 'Motion in Space', 'Leon Hartmann', 15, 'assets/img/card_ticket4.webp', 'assets/img/imgEvento4.webp')
let ticket5 = new TicketsHome(5, '05.05 TALK', '10:00', 'The future of Art', 'Noah Visser', 'FREE', 'assets/img/card_ticket5.webp', 'assets/img/imgEvento5.webp')
let ticket6 = new TicketsHome(6, '05.05 WORKSHOP', '15:00', 'Typography Lab', 'Thomas Vermeer / Sofia Van Dijk', 25, 'assets/img/card_ticket6.webp', 'assets/img/imgEvento6.webp')
let ticket7 = new TicketsHome(7, '06.05 PERFORMANCE', '10:00', 'Deep Listening', 'Aya Nakamura', 15, 'assets/img/card_ticket7.webp', 'assets/img/imgEvento7.webp')
let ticket8 = new TicketsHome(8, '06.05 INSTALLATION', '15:00', 'Fragments of Identity', 'Alena Rodrigo', 10, 'assets/img/card_ticket8.webp', 'assets/img/imgEvento8.webp')
let ticket9 = new TicketsHome(9, '07.05 WORKSHOP', '9:00', 'Creative Coding', 'Leon Hartmann', 25, 'assets/img/card_ticket9.webp', 'assets/img/imgEvent9.webp')
let ticket10 = new TicketsHome(10, '08.05 FINAL', '10:00', 'Final Event', '', 'FREE', 'assets/img/card_ticket10.webp', 'assets/img/imgEvent10.webp')

let tickets = [ticket1, ticket2, ticket3]
let ticketEvents = [ticket1, ticket2, ticket3, ticket4, ticket5, ticket6, ticket7, ticket8, ticket9, ticket10]
let contenitoreT = document.querySelector('#appendTickets')


/* funzioni per disegnare i tickets (home, events, scheda evento) */

// percorsi: nelle pagine dentro /pages/ servono "../" e il link cambia
const inPages = window.location.pathname.includes('/pages/')
const base = inPages ? '../' : ''
const paginaScheda = inPages ? 'schedaevent.html' : 'pages/schedaevent.html'

// true quando la finestra è larga almeno 992px
let mqDesktop = window.matchMedia('(min-width: 992px)')

// lista attualmente mostrata nella pagina events (tutti i ticket o quelli filtrati)
let listaCorrente = ticketEvents

function creaTicketDesktop(ticket, seeAlso = false) {
    let div = document.createElement('div')
    div.classList.add('d-flex')

    if (seeAlso) {
        div.classList.add('contenitoreTicketsSeeAlso')
    } else {
        div.id = 'contenitoreTickets'
    }

    div.dataset.eventId = ticket.id

    div.addEventListener('click', () => {
        window.location.href = `${paginaScheda}?id=${ticket.id}`
    })

    div.innerHTML = `
        <div class="imgTicket">
            <img src="${base}${ticket.img}" alt="" class="w-100">
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
                <img src="${base}assets/img/plus.svg" alt="" width="72px" height="72px">
            </div>
        </div>
    `
    return div
}

function creaTicketMobile(ticket, seeAlso = false) {
    let div = document.createElement('div')
    div.classList.add('ticketMobile', 'w-100', 'd-flex', 'flex-column')

    if (seeAlso) {
        div.classList.add('contenitoreTicketsSeeAlso')
    }

    div.dataset.eventId = ticket.id

    div.addEventListener('click', () => {
        window.location.href = `${paginaScheda}?id=${ticket.id}`
    })

    let prezzo = ticket.prezzo === 'FREE'
        ? 'FREE'
        : ticket.prezzo.toFixed(2).replace('.', ',') + '€'

    div.innerHTML = `
        <div class="etichettaMobile d-flex justify-content-around">
            <p>${ticket.dataTitolo}</p>
            <p>${prezzo}</p>
        </div>
        <div class="bodyTicketMobile d-flex flex-column align-items-center">
            <h3>${ticket.nomeEvento}</h3>
            <p>${ticket.artisti}</p>
        </div>
        <div class="moreEshop d-flex">
            <div class="w-50 d-flex align-items-center justify-content-center">
                <img src="${base}assets/img/arrow_ticket_mobile.svg" alt="">
            </div>
            <div class="w-50 d-flex align-items-center justify-content-center">
                <img src="${base}assets/img/plus_mobile.svg" alt="">
            </div>
        </div>
    `
    return div
}

// funzione generale: svuota un contenitore e ci mette i ticket giusti per la larghezza attuale
function disegnaTickets(destinazione, lista, seeAlso = false) {
    destinazione.innerHTML = ''

    for (let ticket of lista) {
        if (mqDesktop.matches) {
            destinazione.append(creaTicketDesktop(ticket, seeAlso))
        } else {
            destinazione.append(creaTicketMobile(ticket, seeAlso))
        }
    }
}

// usata dalla pagina events e dai filtri
function mostraTickets(lista) {
    listaCorrente = lista
    disegnaTickets(contenitoreT, lista)
}

// HOME:  3 tickets
if (contenitoreT && !document.querySelector('#heroEvents')) {
    disegnaTickets(contenitoreT, tickets)

    mqDesktop.addEventListener('change', () => {
        disegnaTickets(contenitoreT, tickets)
    })
}


//CLASSE E ISTANZE GALLERY IN ABOUT
class CardGallery {
    constructor(img, data) {
        this.img = img
        this.data = data
    }
}

let cardgallery1 = new CardGallery('../assets/img/unoEdPre.webp', '08.05.2025')
let cardgallery2 = new CardGallery('../assets/img/dueEdPre.webp', '08.05.2025')
let cardgallery3 = new CardGallery('../assets/img/treEdPre.webp', '07.05.2025')
let cardgallery4 = new CardGallery('../assets/img/quattroEdPre.webp', '06.05.2025')
let cardgallery5 = new CardGallery('../assets/img/cinqueEdPre.webp', '06.05.2025')
let cardgallery6 = new CardGallery('../assets/img/seiEdPre.webp', '05.05.2025')

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
    constructor(id, img, nome, tipo, biografia) {
        this.id = id
        this.img = img
        this.nome = nome
        this.tipo = tipo
        this.biografia = biografia
    }
}

let cardartista1 = new CardArtisti(1, '../assets/img/luca_moretti.webp', 'Luca Moretti', 'Visual artist', 'Luca Moretti is a visual designer working across graphic design, branding, and digital communication. His practice explores the relationship between visual identity and contemporary culture, combining conceptual research with a strong attention to typography, composition, and detail. Inspired by architecture and urban environments, he experiments with colour and visual structures to transform ideas into distinctive graphic languages. Through his work, Luca seeks to create visual experiences that balance functionality and artistic expression.')
let cardartista2 = new CardArtisti(2, '../assets/img/sofia_van_dijk.webp', 'Sofia Van Dijk', 'Visual artist', 'Sofia Van Dijk is a visual artist exploring the relationship between image, memory, and everyday life. Through collage, mixed media, and digital experimentation, she creates compositions that combine personal experiences with references from contemporary culture. Her process involves collecting and rearranging photographs, textures, and visual fragments to discover unexpected connections. By transforming familiar images into new visual narratives, Sofia invites audiences to reconsider how memories and everyday experiences shape our perception of the world.')
let cardartista3 = new CardArtisti(3, '../assets/img/arthur_bellamy.webp', 'Arthur Bellamy', 'Photographer', 'Arthur Bellamy is a photographer exploring the relationship between people, architecture, and urban environments. Through documentary photography and a careful use of light, he captures overlooked details and unexpected moments within everyday spaces. Fascinated by the complexity of contemporary cities, he focuses on textures, reflections, and the interactions between people and their surroundings. His images reveal the hidden stories of ordinary places, encouraging viewers to reconsider familiar environments and discover the emotional connections between individuals, architecture, and collective memory.')
let cardartista4 = new CardArtisti(4, '../assets/img/lina_kovacs.webp', 'Lina Kovacs', 'Visual artist', 'Lina Kovacs is a visual artist working with colour, form, and spatial composition. Her multidisciplinary practice combines graphic experimentation with an interest in architecture, geometric patterns, and contemporary design. By exploring repetition, contrast, and unexpected arrangements, she creates compositions that balance structure with spontaneity. Her creative process combines systematic research with intuitive decisions, allowing simple visual elements to develop into expressive forms. Through her work, Lina investigates how visual order, rhythm, and colour can communicate emotions and transform familiar graphic structures into new artistic experiences.')
let cardartista5 = new CardArtisti(5, '../assets/img/eva_rossetti.webp', 'Eva Rossetti', 'Visual artist', 'Eva Rossetti is a visual artist interested in the emotional and cultural dimensions of images. Working with illustration, mixed media, and digital composition, she develops visual narratives inspired by human relationships and everyday observations. Her practice combines expressive forms, symbolic elements, and carefully constructed details to explore how images communicate ideas beyond language. Drawing inspiration from ordinary gestures, personal objects, and fleeting moments, Eva transforms everyday experiences into imaginative compositions. Her work encourages audiences to look beyond the surface of an image and discover the emotions and stories hidden within visual details.')
let cardartista6 = new CardArtisti(6, '../assets/img/aya_nakamura.webp', 'Aya Nakamura', 'Sound artist', 'Aya Nakamura is a sound artist exploring the relationship between listening, space, and perception. Through field recordings, electronic textures, and experimental compositions, she transforms environmental sounds into immersive auditory experiences. Collecting sounds from streets, public spaces, and natural environments, she combines recognisable noises with abstract acoustic elements. Her work investigates how sound can evoke memories, influence perception, and create emotional connections with places. By encouraging audiences to pay attention to the acoustic details of their surroundings, Aya reveals new ways of experiencing familiar environments through listening.')
let cardartista7 = new CardArtisti(7, '../assets/img/nora_bellini.webp', 'Nora Bellini', 'Visual artist', 'Nora Bellini is a visual artist exploring identity, symbolism, and the relationship between personal narratives and collective imagination. Through layered imagery, expressive forms, and carefully selected materials, she creates compositions that balance abstraction with recognizable references. Her work draws inspiration from cultural traditions, personal memories, and contemporary media, investigating how symbols acquire different meanings across contexts. By combining fragmented figures, contrasting elements, and visual references, Nora develops narratives that remain open to interpretation. Her practice invites viewers to question familiar symbols and reflect on how images influence individual identity and shared cultural experiences.')
let cardartista8 = new CardArtisti(8, '../assets/img/noah_visser.webp', 'Noah Visser', 'Visual artist', 'Noah Visser is a visual artist investigating the relationship between technology and creative expression. Working with digital imagery, generative processes, and experimental composition, he explores how algorithms and computational systems can become tools for artistic research. His projects combine structured visual logic with unexpected outcomes, creating images that move between precision and spontaneity. Interested in the influence of technology on contemporary visual culture, Noah examines how automated processes can transform traditional approaches to image-making. His work questions the boundaries between human intention and digital systems, encouraging audiences to reconsider the possibilities of creativity in an increasingly technological world.')
let cardartista9 = new CardArtisti(9, '../assets/img/thomas_vermeer.webp', 'Thomas Vermeer', 'Visual artist', 'Thomas Vermeer is a visual artist specialising in typography, editorial systems, and experimental graphic design. His practice explores how letters, grids, and visual hierarchies communicate meaning beyond written language. Drawing inspiration from printed publications and contemporary visual culture, he combines traditional typographic principles with unconventional layouts. Through experimentation with scale, spacing, and contrast, Thomas creates compositions that balance clarity with visual disruption. His work investigates the relationship between text and image, demonstrating how graphic design can function both as a practical communication tool and as an independent artistic language.')
let cardartista10 = new CardArtisti(10, '../assets/img/alena_rodrigo.webp', 'Alena Rodrigo', 'Visual artist', 'Alena Rodrigo is a visual artist exploring the relationship between memory, material, and personal identity. Through photography, collage, and mixed media, she creates layered compositions reflecting on how experiences shape our perception of the world. Her work combines fragmented photographs, tactile surfaces, and contrasting textures to represent the imperfect nature of memory. Interested in the relationship between personal history and visual storytelling, Alena transforms everyday materials into expressive narratives that move between abstraction and recognizable moments. Her practice invites viewers to reflect on their own experiences and consider how images and objects contribute to the construction of identity.')
let cardartista11 = new CardArtisti(11, '../assets/img/leon_hartmann.webp', 'Leon Hartmann', 'Visual artist', 'Leon Hartmann is a multidisciplinary visual artist exploring the relationship between motion, space, and digital experimentation. Combining graphic design, animation, and dynamic compositions, he investigates how movement can transform the meaning of images. His work often develops from simple shapes, typographic elements, and visual patterns that evolve through repetition and unexpected transitions. Interested in the relationship between time and perception, Leon challenges the distinction between static design and moving imagery. Through his experimental approach, he creates visual experiences that encourage audiences to understand communication as an evolving process shaped by movement, rhythm, and interaction.')

let cardsartisti = [cardartista1, cardartista2, cardartista3, cardartista4, cardartista5, cardartista6, cardartista7, cardartista8, cardartista9, cardartista10, cardartista11]
let contArtisti = document.querySelector('#mainArtisti')

if (contArtisti && document.querySelector('#heroArtists')) {
    for (let card of cardsartisti) {
        let div = document.createElement('div')
        div.classList.add('d-flex', 'flex-column')

        div.addEventListener('click', () => {
            window.location.href = `schedaartist.html?id=${card.id}`
        })

        div.innerHTML += `
                            <div>
                                <img src="${card.img}" alt="" class="w-100">
                            </div>
                            <div class="d-flex justify-content-between fasciaCardArtisti">
                                <div class="d-flex flex-column">
                                    <p>${card.nome}</p>
                                    <p>${card.tipo}</p>
                                </div>
                                <div><img src="../assets/img/arrow.svg" alt=""></div>
                            </div>
        `
        contArtisti.append(div)
    }
}


/* filtri */

let filtroGiorno = 'all'
let filtroTipo = 'all'

let spanFiltri = document.querySelectorAll('.filtri span[data-valore]')

for (let span of spanFiltri) {
    span.addEventListener('click', () => {

        if (span.dataset.filtro === 'giorno') {
            filtroGiorno = span.dataset.valore
        } else {
            filtroTipo = span.dataset.valore
        }

        let gruppo = span.dataset.filtro

        for (let s of spanFiltri) {
            if (s.dataset.filtro === gruppo) {
                s.classList.remove('attivo')
            }
        }

        span.classList.add('attivo')

        let filtrati = ticketEvents.filter(ticket => {
            let giornoOk = filtroGiorno === 'all' || ticket.giorno === filtroGiorno
            let tipoOk = filtroTipo === 'all' || ticket.tipo === filtroTipo
            return giornoOk && tipoOk
        })

        mostraTickets(filtrati)
    })
}


/* card artisti filtrati*/

function mostraArtisti(lista) {
    contArtisti.innerHTML = ''

    for (let card of lista) {
        let div = document.createElement('div')
        div.classList.add('d-flex', 'flex-column')

        div.addEventListener('click', () => {
            window.location.href = `schedaartist.html?id=${card.id}`
        })

        div.innerHTML = `
            <div>
                <img src="${card.img}" alt="" class="w-100">
            </div>
            <div class="d-flex justify-content-between fasciaCardArtisti">
                <div class="d-flex flex-column">
                    <p>${card.nome}</p>
                    <p>${card.tipo}</p>
                </div>
                <div><img src="../assets/img/arrow.svg" alt=""></div>
            </div>
        `
        contArtisti.append(div)
    }
}

/* filtri artisti */

let spanArtisti = document.querySelectorAll('.filtri span[data-artista]')

for (let span of spanArtisti) {
    span.addEventListener('click', () => {

        for (let s of spanArtisti) {
            s.classList.remove('attivo')
        }
        span.classList.add('attivo')

        let valore = span.dataset.artista

        if (valore === 'all') {
            mostraArtisti(cardsartisti)
        } else {
            let filtrati = cardsartisti.filter(card => card.tipo === valore)
            mostraArtisti(filtrati)
        }
    })
}


/* avvio tickets pagina EVENTS + cambio di larghezza */

if (contenitoreT && document.querySelector('#heroEvents')) {
    // primo disegno al caricamento della pagina
    mostraTickets(ticketEvents)

    // quando la finestra attraversa i 992px ridisegno la lista
    mqDesktop.addEventListener('change', () => {
        mostraTickets(listaCorrente)
    })
}

/* scroll morbido */
const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


/* apparizione graduale */
gsap.registerPlugin(ScrollTrigger)

gsap.utils.toArray('h1, h2, p, img, li, span').forEach(el => {
    if (el.closest('#button-hero')) return   

    gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
            trigger: el,
            start: 'top 90%'
        }
    })
})