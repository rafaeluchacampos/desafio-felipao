class Hero{
    constructor(name, age, heroClass, typeAttack){
        this.name = name
        this.age = age
        this.heroClass = heroClass
        this.typeAttack = typeAttack
    }

    write(){
        console.log(`Herói: ${this.name}; idade: ${this.age}; classe: ${this.heroClass}`)
    }

    attack(){
        if (this.heroClass === "mago"){
            this.typeAttack = "magia"
        }else if (this.heroClass === "guerreiro"){
            this.typeAttack = "espada"
        }else if (this.heroClass === "monge"){
            this.typeAttack = "artes marciais"
        }else if (this.heroClass === "ninja"){
            this.typeAttack = "shuriken"
        }
        console.log(`O ${this.heroClass} atacou usando ${this.typeAttack}`)
    }

}

let player1 = new Hero("Takko", "33", "mago")
let player2 = new Hero("Groog", "33", "guerreiro")
let player3 = new Hero("Klaus", "33", "monge")
let player4 = new Hero("Juju", "33", "ninja")

player1.write()
player1.attack()

console.log("")

player2.write()
player2.attack()

console.log("")

player3.write()
player3.attack()

console.log("")

player4.write()
player4.attack()
