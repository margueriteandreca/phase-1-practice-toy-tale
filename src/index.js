const toyForm = document.querySelector(".add-toy-form");
const toyCollection = document.getElementById("toy-collection");


fetch("http://localhost:3000/toys")
.then(res => res.json())
.then(toys => {
  createToyCard(toys);
})


function createToyCard(toys) {
    toys.forEach(toy => {
      const toyCard = document.createElement("div");
      toyCard.className = "card"
      const toyName = document.createElement("h2");
      const toyImage = document.createElement("img");
      const toyLikes = document.createElement("p");
      const toyButton = document.createElement("button")
      toyName.textContent = toy.name
      toyImage.src = toy.image
      toyImage.alt = toy.name
      toyImage.className = "toy-avatar"
      toyLikes.textContent = `${toy.likes} Likes`
      toyButton.className = "like-btn"
      toyButton.id = toy.id
      toyButton.textContent = "Like Me!"
      let count = toy.likes
      toyButton.addEventListener("click", () => {
        toyLikes.textContent = `${count} likes`
        count = parseInt(toyLikes.textContent) + 1
      });
      toyCard.append(toyName, toyImage, toyLikes, toyButton);
      toyCollection.append(toyCard);
      
})};

function toyFormSubmit() {
  toyForm.addEventListener("submit", (e) => {
    e.preventDefault();
      const toyNameInput = document.querySelectorAll(".input-text")[0]
      console.log(toyNameInput)
      const toyImageInput = document.querySelectorAll(".input-text")[1]
      const toyCard = document.createElement("div");
      toyCard.className = "card"
      const toyName = document.createElement("h2");
      const toyImage = document.createElement("img");
      const toyLikes = document.createElement("p");
      const toyButton = document.createElement("button")
      toyName.textContent = toyNameInput.value
      toyImage.src = toyImageInput.value
      toyImage.alt = toyNameInput.value
      toyImage.className = "toy-avatar"
      toyLikes.textContent = 
      toyButton.className = "like-btn"
      toyButton.id = 
      toyButton.textContent = "Like Me!"
      toyCard.append(toyName, toyImage, toyLikes, toyButton)
      toyCollection.append(toyCard);

  });
};

toyFormSubmit();

function likeButton() {
  

};

function postInfo (MyObj) {
fetch("http://localhost:3000/toys", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(MyObj)
      })
      .then(res => res.json())
      .then(data => console.log(data))
    };
    

//card has class .card

// "id": 1,
// "name": "Woody",
// "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
// "likes": 5


















let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
})
