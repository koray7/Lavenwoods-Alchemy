console.log("is it working")


//button will activate event listener that will run a function to call the form submission
const mageCreateButton = document.getElementById("mage-submit")
mageCreateButton.addEventListener('click', mageCreate)

function mageCreate(){
    document.getElementById('mage-create').submit()
}

