import { Arqueiro } from "./Arqueiro.js";
import { Magos } from "./Magos.js";
import { Personagem } from "./personagem.js";

export class  ArqueiroMago extends Personagem {
    ladoArqueiro
    ladoMago
    static tipo = 'ArqueiroMago'

    constructor (nome, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome)
        this.ladoArqueiro = new Arqueiro (nome, destreza)
        this.ladoMago = new Magos (nome, elementoMagico,levelMagico, inteligencia)
    }

    obterInsignia(){
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    } 
}