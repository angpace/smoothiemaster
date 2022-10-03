document.addEventListener('DOMContentLoaded', () => {
    const fruitBasket = document.querySelector("#fruitList")

    fetch("http://localhost:3000/Fruits")
    .then(data => data.json())
    .then(res => res.forEach(element => {
        fruitRender(element)
    }))

    //function to render the fruits in the ingredients section
    function fruitRender(fruit){
        let newFruit = document.createElement('div')
        let fruitImg = document.createElement('img')
        let fruitName = document.createElement('p')

        fruitImg.src = fruit.image
        fruitName.textContent = fruit.name
        
        newFruit.className = "fruits"
        newFruit.id = fruit.id

        newFruit.append(fruitImg)
        newFruit.append(fruitName)
        fruitBasket.append(newFruit)
    }

})