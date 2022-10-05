document.addEventListener('DOMContentLoaded', () => {
    const fruitBasket = document.querySelector("#basket")
    //console.log(fruitBasket)

    fetch("http://localhost:3000/Fruits")
        .then(res => res.json())
        .then(data => fruitRender(data))


    //function to render the fruits in the ingredients section
    function fruitRender(data) {
        data.forEach(fruit => {
            const newFruitImage = document.createElement('img')
            newFruitImage.src = fruit.image
            newFruitImage.className = "fruit"
            newFruitImage.id = fruit.name
            //const fruitNutrition = document.createElement('ul')
            for (let key in fruit.nutritions) {
                let newNutri = document.createElement('p')
                newNutri.className = key
                newNutri.textContent = fruit.nutritions[key]
                newFruitImage.append(newNutri)
            }
            //console.log(fruitNutrition)

            //newFruitImage.appendChild(fruitNutrition)

            //adding the eventlistener for drag n drop
            newFruitImage.addEventListener('dragstart', (e) => {
                console.log(e.target)
                e.dataTransfer.setData("text", e.target.id);
            }
        )
            fruitBasket.addEventListener('drop', drop)
            fruitBasket.addEventListener('dragover', allowDrop)


            const fruitsList = document.querySelector("#fruitList")
            fruitsList.addEventListener("click", () => fruitBasket.append(newFruitImage))

        });
    }

    const frameDiv = document.getElementById('picture-frame')
    const pictureFrame = document.createElement('img')
    pictureFrame.id = "img"
    pictureFrame.src = "Art-empty-frame-in-golden-on-transparent-background-PNG.png"
    frameDiv.append(pictureFrame)
    const noriPic = document.createElement('img')
    noriPic.id = "nori"
    noriPic.src = "noripicture.png"

    frameDiv.append(noriPic)

    pictureFrame.addEventListener("mouseover", () => {
        alert('Woof, Woof!')
    })

    const blendDiv = document.querySelector(".card")
    const blender = document.getElementById("blender")

    //adding the event listener to the blender
    blender.addEventListener('drop', drop)
    blender.addEventListener('dragover', allowDrop)

    const blendButton = document.createElement('button')
    blendButton.textContent = "Blend"
    blendButton.className = "btn"
    blendButton.id = "blend-button"

    const resetButton = document.createElement('button')
    resetButton.textContent = "Reset"
    resetButton.className = "btn"
    resetButton.id = "reset-button"

    blendButton.addEventListener('click', () => {
        alert("Oops, nothing to blend! Try adding fruit by dragging them to the blender")
    })
    resetButton.addEventListener('click', () => {
        alert("Reset!")
    })

    blendDiv.append(blendButton)
    blendDiv.append(resetButton)

    //functions to add as callback events for the drag and drop
    function allowDrop(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        console.log(e.target)
        let nutriData = e.dataTransfer.getData("text");
        e.target.append(document.getElementById(nutriData));
    }


})