let doggo = ''

const xhr = new XMLHttpRequest();

const menuBtn = document.getElementById('menubtn');
const menu = document.getElementById('menu');

let howManyDoggo = 7

menuBtn.addEventListener('click', toggleMenu)

// toggles the mobile nav menu, by default it's hidden to the left of the viewport
function toggleMenu() {
    console.log('click')

    if (menu.style.left === "-311px") {

        menu.style.left = "0px";
        console.log('display none')
        
    } else {
        
        menu.style.left = "-311px";
        console.log('display none')
    }
}

//Gets one picture for the main image element
function updatePics() {
    
    xhr.open('GET', "https://dog.ceo/api/breeds/image/random/")
    xhr.send()
    xhr.onload = function() {
        console.log('it loads')
    data = JSON.parse(xhr.response)    
    document.getElementById("main-image").src = `${data.message[0]}`
     }
}

//gets pics for however many doggos is specified in the variable howManyDoggo
function generateDoggos() {
    
    
        xhr.open('GET', `https://dog.ceo/api/breeds/image/random/${howManyDoggo}`)
        xhr.send()
        xhr.onload = function() {
        
        data = JSON.parse(xhr.response)
        console.log(data)
        number = 0
        
        //For each of the pictures returned from dog.ceo, create a container with the picture as background image, create heading and text and then append to a productimage div
        // which is in turn appended to the products container. Finally number is incremented by one so that a new image will be selected for the next loop
        
        data.message.forEach(()=> {
            let productContainer = document.createElement('div');
            let productImage =  document.createElement('div');
            let title = document.createElement('h2');
            let text = document.createElement('p');
            productImage.classList.add("productimage");
            productContainer.classList.add("productcontainer");            
            productImage.style.backgroundImage = `url(${data.message[number]})`;
            text.textContent = "it's a dog"
            title.textContent = "Dog Title"
            text.style.background = "white"
            productContainer.appendChild(productImage)
            productContainer.appendChild(title)
            productContainer.appendChild(text)
            document.getElementById('products').appendChild(productContainer)  
            let randomNumber = Math.floor(Math.random() * Math.floor(howManyDoggo))
            document.getElementById("main-image").src = `${data.message[randomNumber]}`
            randomNumber = Math.floor(Math.random() * Math.floor(howManyDoggo))
            document.getElementById("info-image").src = `${data.message[randomNumber]}`
            number++
            
        })
       
        
    
    }

}

updatePics();
generateDoggos();

