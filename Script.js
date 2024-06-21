class menBelt  {
    constructor(beltName, beltPrice){
        this.beltName = beltName,
        this.beltPrice = beltPrice
    }
}
let Belt = []

const Belt1 = new menBelt("Belt 1", "100")
// document.querySelector('.P1').innerHTML = `Name = ${Belt1.beltName}  Price = ${Belt1.beltPrice}`
Belt.push(Belt1)

const Belt2 = new menBelt("Belt 2", "2")
// document.querySelector('.P2').innerHTML = `Name = ${Belt2.beltName}  Price = ${Belt2.beltPrice}`
Belt.push(Belt2)

console.log(Belt[0].beltPrice)
console.log(Belt)
