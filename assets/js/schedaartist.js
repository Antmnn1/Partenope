// recupero id dall'url

let parametri = new URLSearchParams(window.location.search)
let idArtista = Number(parametri.get('id'))


// recupero dati artista

let artista = cardsartisti.find(card => card.id === idArtista)


// inserimento dati nella pagina

if (artista) {

    document.querySelector('#nomeArtista').textContent = artista.nome
    document.querySelector('#cat').textContent = artista.tipo
    document.querySelector('#imgArtista').src = artista.img
    document.querySelector('#biografiaArtista').textContent = artista.biografia

} else {

    document.querySelector('#nomeArtista').textContent = 'Artist not found'

}