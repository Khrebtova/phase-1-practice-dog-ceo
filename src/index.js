
let imageContainer = document.getElementById('dog-image-container')
const listOfBreeds = document.getElementById("dog-breeds")
const newimgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let allBreeds = []
let dropdown = document.getElementById("breed-dropdown")

function handlePictures(){    
fetch(newimgUrl)
    .then (res => res.json())
    .then ((object) => {
            object.message.forEach( image => {
            const img  = document.createElement('img')
            img.src = `${image}`
            document.querySelector('#dog-image-container').appendChild(img)
        })  
    })
}
handlePictures();

function handleBreedsList(){
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
        for(let breed in data.message) {
            allBreeds.push(breed)
            createLi(breed)
        }
    })
}
handleBreedsList()

function createLi(breed){
    const li = document.createElement('li')
    li.innerText = breed
    listOfBreeds.appendChild(li)
    li.addEventListener("click", () => {
        li.style.color = "blue";
    })
}

function handleSorting(arr){
    dropdown.addEventListener("change", () => {
        console.log(dropdown.value)
        let sortedArray = arr.filter(breed => {
            return breed[0] == dropdown.value  
        })
        console.log(sortedArray)
        listOfBreeds.innerHTML = ''
        sortedArray.forEach(breed => {
            createLi(breed)
        })
        })
}
handleSorting(allBreeds)