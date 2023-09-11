import { Personagem } from "./module/personagem.js"
import { personagemview } from "./components/personagem-view.js"
import { Magos } from "./module/Magos.js"
import { Arqueiro } from "./module/Arqueiro.js"
import { ArqueiroMago } from "./module/ArqueiroMago.js"

const personagemJose = new Magos('Vitor', 10, 'Fogo', 5, 10)
const personagemAna = new Magos('Ana', 4, 'Gelo', 5, 4)
const ArqueiroMario = new Arqueiro('Mario', 10, 8)
const arqueiroMagoBea = new ArqueiroMago('Bea', 7, 5, 'Ar', 4, 8)




const personagens = [personagemJose, personagemAna, ArqueiroMario, arqueiroMagoBea]

new personagemview(personagens).render()
