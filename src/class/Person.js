class Personagem {
    #hp
    constructor(nome, classe, psVida) {
        this.nome = nome
        this.classe = classe
        this.#hp = psVida
    }

    atacar(atkPower) {
        if (atkPower >= 100) {
            console.log(`
            ${this.nome} atacou com ${atkPower} pontos de força, isso foi forte!
            `)
        } else {
            console.log(`
            ${this.nome} atacou com ${atkPower} pontos de força, isso foi fraco!
            `)
        }
    }
    info() {
        console.log(`
            ===============================
            Nome: ${this.nome}
            Classe: ${this.classe}
            Ponstos de Saúde: ${this.#hp}
            `)
    }
}

module.exports = Personagem