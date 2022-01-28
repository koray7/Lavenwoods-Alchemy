console.log("is it working")

let url = "https://uselessfacts.jsph.pl/random.json?language=en"

const potionNames = ["Instant Death", "Instant Life", "Apparition"]


const random = Math.floor(Math.random() * potionNames.length)



const options = {
    method: 'GET',
    headers: {},
}

let mageQuote = ""

function getQuote(){
    fetch(url, options).then((resp) => {
        resp.json().then((data) =>{
            mageQuote = data.text
            const display = document.getElementById('mage-quote')
            display.innerText = mageQuote
            })
        })
    }

function nameValue(){
    let potionName = potionNames[random]
    const display = document.getElementById('potion-name')
    display.value = potionName
}

