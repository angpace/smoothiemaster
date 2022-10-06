document.addEventListener('DOMContentLoaded', () => {
    const fruitBasket = document.querySelector("#basket")
    const carbos = document.querySelector('#carbohydrates')
    const prots = document.querySelector('#protein')
    const fats = document.querySelector('#fat')
    const cals = document.querySelector('#calories')
    const sugs = document.querySelector('#sugar')
    const header = document.querySelector('#smoothie')
    const nutriHeaders = document.querySelector('#nutrition_labels')
    carbos.textContent = 0
    prots.textContent = 0
    fats.textContent = 0
    cals.textContent = 0
    sugs.textContent = 0

    const smoothiePictureContainer = document.querySelector('#smoothiePictureContainer')
    const smoothiePicture = document.querySelector('#smoothiePicture')

    fetch("http://localhost:3000/Fruits")
        .then(res => res.json())
        .then(data => fruitRender(data))


    //function to render the fruits in the ingredients section
    function fruitRender(data) {
        data.forEach(fruit => {
            const newFruitImage = document.createElement('img')
            newFruitImage.src = fruit.image
            newFruitImage.className = "fruit"
            newFruitImage.id = fruit.id
            const nutrition = document.createElement('p')
            nutrition.textContent = Object.values(fruit.nutritions)
            newFruitImage.append(nutrition)
            
            newFruitImage.addEventListener('dragstart', (e) => {
                console.log(e.target.id)
                console.log(Object.values(fruit.nutritions))
                e.dataTransfer.setData("text", Object.values(fruit.nutritions));
            })

            fruitBasket.addEventListener('drop', drop)
            fruitBasket.addEventListener('dragover', allowDrop)


            const fruitsList = document.querySelector("#fruitList")
            fruitsList.addEventListener("click", () => fruitBasket.append(newFruitImage))

        });
        const blendDiv = document.querySelector(".card")
        const blender = document.getElementById("blender")
    
        //adding the event listener to the blender
        blender.addEventListener('drop', drop)
        blender.addEventListener('dragover', allowDrop)
        
        //adding the buttons, blend & reset
        const blendButton = document.createElement('button')
        blendButton.textContent = "Blend"
        blendButton.className = "btn"
        blendButton.id = "blend-button"

        const resetButton = document.createElement('button')
        resetButton.textContent = "Reset"
        resetButton.className = "btn"
        resetButton.id = "reset-button"

        function displaySmoothie(){
            smoothiePictureContainer.style.display = "block"
            smoothiePicture.style.display = "block"
        }
        
        function displayNutrition(){
            header.style.display = "block"
            nutriHeaders.style.display = "block"
        }
        blendButton.addEventListener('click', () => {
            displayNutrition()
            blender.addEventListener('mouseover', displaySmoothie)

        })

        blendButton.addEventListener("click", () => {
            fruitBasket.style.display = "none"
        })



        resetButton.addEventListener('click', () => {
            header.querySelector("#carbohydrates").textContent = 0
            header.querySelector("#protein").textContent = 0
            header.querySelector("#fat").textContent = 0
            header.querySelector("#calories").textContent = 0
            header.querySelector("#sugar").textContent = 0
            header.style.display = "none"
            nutriHeaders.style.display = "none"
            smoothiePictureContainer.style.display = "none"
            smoothiePicture.style.display = "none"
            fruitBasket.style.display = "block"


            blender.removeEventListener('mouseover', displaySmoothie)
        })

        blendDiv.append(blendButton)
        blendDiv.append(resetButton)

        //functions to add as callback events for the drag and drop
        function allowDrop(e) {
            e.preventDefault();
        }

        function drop(e) {
            e.preventDefault();
            let nutriData = e.dataTransfer.getData("text");
            e.target.append(document.getElementById(nutriData));
            let fruitValues = e.dataTransfer.getData("text")
            console.log(e.target)
            smoothieFunction(fruitValues)
        }

        function smoothieFunction(fruitValues) {
            const fruitArray = fruitValues.split(",")
            const carbohydrates =  fruitArray[0]
            const protein = fruitArray[1]
            const fat = fruitArray[2]
            const calories =fruitArray[3]
            const sugar = fruitArray[4]
            
            carbos.textContent = (parseFloat(`${carbos.textContent}`) + parseFloat(`${carbohydrates}`)).toFixed(2)
            prots.textContent = (parseFloat(`${prots.textContent}`) + parseFloat(`${protein}`)).toFixed(2)
            fats.textContent = (parseFloat(`${fats.textContent}`) + parseFloat(`${fat}`)).toFixed(2)
            cals.textContent = (parseFloat(`${cals.textContent}`) + parseFloat(`${calories}`)).toFixed(2)
            sugs.textContent = (parseFloat(`${sugs.textContent}`) + parseFloat(`${sugar}`)).toFixed(2)
        }
    }

    const frameDiv = document.getElementById('picture-frame')
    const pictureFrame = document.createElement('img')
    pictureFrame.id = "img"
    pictureFrame.src = "Art-empty-frame-in-golden-on-transparent-background-PNG.png"
    frameDiv.append(pictureFrame)
    const noriPic = document.createElement('img')
    noriPic.id = "nori"
    noriPic.src = "norinew.png"


    pictureFrame.addEventListener("mouseover", () => {
        frameDiv.append(noriPic)
    })



})