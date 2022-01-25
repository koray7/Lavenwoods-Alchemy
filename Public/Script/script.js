console.log("is it working")



let url = "https://ffa.aakhilv.me/json"

const options = {
    method: 'GET',
    headers: {},
}

// const button = document.getElementById('clicker')
// button.addEventListener('click', getQuote)

function getQuote(){
fetch(url, options).then((resp) => {
    console.log(resp)
    resp.json().then((data) =>{
        const quote = data.body
        const display = document.getElementById('quote')
        display.innerText = quote
        })
    })
}