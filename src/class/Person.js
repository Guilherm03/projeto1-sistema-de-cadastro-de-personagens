class Personagem {

    constructor(nome, classe, psVida) {
        this.nome = nome
        this.classe = classe
        this.psVida = psVida
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
            Ponstos de Saúde: ${this.psVida}
            `)
    }
}

module.exports = Personagem