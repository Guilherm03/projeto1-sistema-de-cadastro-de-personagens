const Personagem = require("./src/class/Person")

const person1 = new Personagem('Jão', 'Gigante', 3000)
const person2 = new Personagem('Helder', 'Mago', 30000)
const person3 = new Personagem('Davi', 'Cavaleiro', 300)

person1.info()
person1.atacar(10)
person2.info()
person2.atacar(100000)
person3.info()

person3.atacar(100)

