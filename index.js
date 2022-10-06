document.addEventListener('DOMContentLoaded', () => {
    const fruitBasket = document.querySelector("#basket")
    const smoothie = document.querySelector('#protein')
    const header = document.querySelector('#smoothie')
    smoothie.textContent = 0
    header.append(smoothie)

    //console.log(fruitBasket)

    fetch("http://localhost:3000/Fruits")
        .then(res => res.json())
        .then(data => fruitRender(data))


    //function to render the fruits in the ingredients section
    // debugger
    function fruitRender(data) {
        data.forEach(fruit => {
            const newFruitImage = document.createElement('img')
            newFruitImage.src = fruit.image
            newFruitImage.className = "fruit"
            newFruitImage.id = fruit.id
            const nutrition = document.createElement('p')
            nutrition.textContent = Object.values(fruit.nutritions)
            // console.log(Object.values(fruit.nutritions))
            newFruitImage.append(nutrition)
            // console.log(Object.values(fruit.nutritions))
            newFruitImage.addEventListener('dragstart', (e) => {
                console.log(e.target.id)
                // e.target.id
                e.dataTransfer.setData("text", Object.values(fruit.nutritions));
                // console.log(Object.values(fruit.nutritions))
            }


            )
            fruitBasket.addEventListener('drop', drop)
            fruitBasket.addEventListener('dragover', allowDrop)


            const fruitsList = document.querySelector("#fruitList")
            fruitsList.addEventListener("click", () => fruitBasket.append(newFruitImage))

        });
        const blendDiv = document.querySelector(".card")
        const blender = document.getElementById("blender")
        // const smoothie = document.querySelector('#protein')
        // .append(smoothie)

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
            // console.log(e.target)
            let nutriData = e.dataTransfer.getData("text");
            e.target.append(document.getElementById(nutriData));
            // console.log(e.dataTransfer.getData("text"))
            let fruitValues = e.dataTransfer.getData("text")
            console.log(e.target)
            smoothieFunction(fruitValues)
            // console.log(fruitValues)
        }

        function smoothieFunction(fruitValues) {
            // let fruitCarbs = parseFloat(`${fruitValues}`)
            const fruitArray = fruitValues.split(",")
            const protein = fruitArray[1]
            smoothie.textContent = parseFloat(`${smoothie.textContent}`) + parseFloat(`${protein}`)
            console.log(protein)


            //    let smoothieProtein = fruitValues[nutritions][1]  
            //    console.log(`your fruit has ${smoothieCarbs} carbs!`)
            //    console.log(smoothieProtein)
        }
        // smoothieFunction()
    }

    const frameDiv = document.getElementById('picture-frame')
    const pictureFrame = document.createElement('img')
    pictureFrame.id = "img"
    pictureFrame.src = "Art-empty-frame-in-golden-on-transparent-background-PNG.png"
    frameDiv.append(pictureFrame)
    const noriPic = document.createElement('img')
    noriPic.id = "nori"
    noriPic.src = "norinew.png"

    // frameDiv.append(noriPic)

    pictureFrame.addEventListener("mouseover", () => {
        frameDiv.append(noriPic)
    })
    })



// })