document.addEventListener('DOMContentLoaded', () => {
    const fruitBasket = document.querySelector("#basket")
    console.log(fruitBasket)

    fetch("http://localhost:3000/Fruits")
        .then(res => res.json())
        .then(data => fruitRender(data))


//function to render the fruits in the ingredients section
function fruitRender(data) {
    data.forEach(fruit => {
        const newFruitImage = document.createElement('img')
        newFruitImage.src = fruit.image

        newFruitImage.className = "fruit"

        fruitBasket.append(newFruitImage)
        
    });
    // let newFruit = document.createElement('div')
    // let fruitImg = document.createElement('img')
    // let fruitName = document.createElement('p')

    // fruitImg.src = fruit.image
    // fruitName.textContent = fruit.name

    // fruitImg.className = "fruits"


    // newFruit.append(fruitName)
    // newFruit.append(fruitImg)
    // fruitBasket.append(newFruit)
}
=======
        newFruit.append(fruitName)
        newFruit.append(fruitImg)
        fruitBasket.append(newFruit)
    }
const blendDiv = document.querySelector(".card")
const blender = document.getElementById("blender")
const blendButton = document.createElement('button')
blendButton.textContent = "Blend"
blendButton.className = "btn"
const resetButton = document.createElement('button')
resetButton.textContent = "Reset"
resetButton.classname = "btn"
blendButton.addEventListener('click', () => {
alert("Smoothie!")
})
resetButton.addEventListener('click', () => {
    alert("Reset!")
})
blendDiv.append(blendButton)
blendDiv.append(resetButton)


})