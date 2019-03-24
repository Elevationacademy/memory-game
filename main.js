//memory game

const animals = [
    "https://images.unsplash.com/photo-1450052590821-8bf91254a353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1507461476191-0ed4f9f18533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80",
    "https://images.unsplash.com/photo-1514655013245-0c51e629bd2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1529451310546-178d75816ffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1858&q=80",
    "https://images.unsplash.com/photo-1484620479898-57494cfedf1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2007&q=80",
    "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1875&q=80",
    "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    "https://images.unsplash.com/photo-1531884070720-875c7622d4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    "https://images.unsplash.com/photo-1450052590821-8bf91254a353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1507461476191-0ed4f9f18533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80",
    "https://images.unsplash.com/photo-1514655013245-0c51e629bd2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1529451310546-178d75816ffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1858&q=80",
    "https://images.unsplash.com/photo-1484620479898-57494cfedf1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2007&q=80",
    "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1875&q=80",
    "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    "https://images.unsplash.com/photo-1531884070720-875c7622d4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
]

let tempSelected = []
let guessedSelected = []

const addCard = function (imgURL, selected, index) {
    selected ?
        $("#game").append(`<div class='card'><img src=${imgURL}/><div>`) :
        $("#game").append(`<div class='card'>${parseInt(index) + 1}<div>`)
}

const displayCards = function () {
    $("#game").empty()
    for (let index in animals) {
        let selected = tempSelected[index] || guessedSelected[index]
        let animal = animals[index]

        addCard(animal, selected, index)
    }
}

const loadBooleans = function(arr){
    arr.length = 0
    for(let _ in animals){
        arr.push(false)
    }
}

const guess = function () {
    loadBooleans(tempSelected)

    let num1 = parseInt($("#num-1").val())
    let num2 = parseInt($("#num-2").val())
    
    tempSelected[num1 - 1] = true
    tempSelected[num2 - 1] = true

    if(animals[num1 - 1] === animals[num2 - 1]){
        guessedSelected[num1 - 1] = true
        guessedSelected[num2 - 1] = true
    }

    displayCards()
}

loadBooleans(tempSelected)
loadBooleans(guessedSelected)
animals.sort(() => .5 - Math.random())
displayCards(false)