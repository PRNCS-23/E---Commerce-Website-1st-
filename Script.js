class menBelt {
    constructor(beltName, beltPrice){
        this.beltName = beltName,
        this.beltPrice = beltPrice
    }
}
const Belt1 = new menBelt("Belt1", "10500.00 Rs")
document.querySelector('.Belt1_Name').innerHTML = `Name: ${Belt1.beltName}`
document.querySelector('.Belt1_Price').innerHTML = `Price: ${Belt1.beltPrice}`

const Belt2 = new menBelt("Belt2","11020.00 Rs")
document.querySelector('.Belt2_Name').innerHTML = `Name: ${Belt2.beltName}`
document.querySelector('.Belt2_Price').innerHTML = `Price: ${Belt2.beltPrice}`

const Belt3 = new menBelt("Belt3", "12040.00 Rs")
document.querySelector('.Belt3_Name').innerHTML = `Name: ${Belt3.beltName}`
document.querySelector('.Belt3_Price').innerHTML = `Price: ${Belt3.beltPrice}`

const Belt4 = new menBelt("Belt4", "10200.00 Rs")
document.querySelector('.Belt4_Name').innerHTML = `Name: ${Belt4.beltName}`
document.querySelector('.Belt4_Price').innerHTML = `Price: ${Belt4.beltPrice}`

const Belt5 = new menBelt("Belt5","11000.00 Rs")
document.querySelector('.Belt5_Name').innerHTML = `Name: ${Belt5.beltName}`
document.querySelector('.Belt5_Price').innerHTML = `Price: ${Belt5.beltPrice}`

const Belt6 = new menBelt("Belt6", "12100.00 Rs")
document.querySelector('.Belt6_Name').innerHTML = `Name: ${Belt6.beltName}`
document.querySelector('.Belt6_Price').innerHTML = `Price: ${Belt6.beltPrice}`

const Belt7 = new menBelt("Belt7", "13400.00 Rs")
document.querySelector('.Belt7_Name').innerHTML = `Name: ${Belt7.beltName}`
document.querySelector('.Belt7_Price').innerHTML = `Price: ${Belt7.beltPrice}`

const Belt8 = new menBelt("Belt8", "10000.00 Rs")
document.querySelector('.Belt8_Name').innerHTML = `Name: ${Belt8.beltName}`
document.querySelector('.Belt8_Price').innerHTML = `Price: ${Belt8.beltPrice}`

function Work(){
    let value = document.querySelector('#ManBag').value
    alert(value)
}