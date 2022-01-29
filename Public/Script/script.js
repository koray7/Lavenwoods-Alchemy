let url = "https://uselessfacts.jsph.pl/random.json?language=en"

const potionNames = ["Instant Death", "Instant Life", "Apparition", "Fire Potion", "Frost Potion", "Bolt Potion", "Mystery Potion", "Elixir of Neglect", "Tonic of Secrets", "Tonique de Folie", "Philter of Pleasure", "Potion of Endings", "Brew of Lightning", "Draught of Immobilizing", "Draught of Brute Force", "Flask of the Guru", "Tonic of Nimble Feet", "Vial of Awakening", "Philter of Justice", "Draught of Reversed Time", "Potion of the Seer", "Tonic of Bribery", "Vial of the Void", "Draught of Insomnia", "Phial of Foresight", "Elixir of Slowing", "Brew of Lion's Roar", "Flask of Visions", "Elixir of Deliriousness", "Potion du Géant", "Phial of Intuition", "Flask of Smoke", "Phial of the Oracle", "Phial of Sunlight", "Draught of Remembrance", "Philter of Enhanced Sleep", "Tonic of Pain", "Draught of Madness", "Brew of Pheromones", "Elixir of Misery", "Flask of Feather Weight", "Tonic of Berserking", "Flask of the Enigma", "Flask of the Shadows", "Potion of Holy Protection", "Vial of Blossoms", "Draught of the Healer", "Draught of the Deaf", "Flask of Repair", "Potion of Mind Control", "Brew of Agility", "Philter of Endings", "Draught of Souls", "Brew of Ghosts", "Potion of the Storm", "Brouillon d'Ignorance", "Phial of Free Will", "Elixir of Remembrance", "Vial of Knowledge", "Elixir of Curing", "Elixir of Titanic Strength", "Potion of the Volcano", "Philter of Lightning Speed", "Elixir of the Blind", "Flask of Corruption", "Draught of Chaos", "Tonic of the Archmage", "Potion of Fixation", "Potion of Impotence", "Potion of Giant Growth", "Flask of Swiftness", "Tonic of Invisibility", "Flask of Hunger", "Phial of Broken Locks", "Flask of Reflexes", "Elixir of Ancient Secrets", "Vial of Vampiric Blood", "Elixir of Immolation", "Philter of Hysteria",]

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

