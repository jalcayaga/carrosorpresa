const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateCarrito = document.getElementById('template-carrito').content
const templateFooter = document.getElementById('template-footer').content
const fragment = document.createDocumentFragment()
let carrito = {}