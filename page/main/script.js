let menuElem = document.getElementById("Menu");
let burger = menuElem.querySelector(".header__burger");

burger.onclick = function () {
  menuElem.classList.toggle("open");
};
menuElem.onclick = function (event) {
  let target = event.target;
  if (target.tagName == "A") menuElem.classList.toggle("open");
};

const pet = {
  name: "Jennifer",
  img: "../../assets/images/jennifer.png",
  type: "Dog",
  breed: "Labrador",
  description:
    "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
  age: "2 months",
  inoculations: ["none"],
  diseases: ["none"],
  parasites: ["none"],
};

let namePets = document.querySelector(".pets__name-popap");
namePets.innerHTML = pet.type;

let sliderPets = document.getElementById("CP");
let cardPest = sliderPets.querySelector(".pets__card");

sliderPets.onclick = function (event) {
  let target = event.target;
  if (target.className == "pets__card") sliderPets.classList.toggle("open");
};

// cardPest.onclick = function () {
//   sliderPets.classList.toggle("open");
// };

let closeCard = document.getElementById("PetsBG");

closeCard.onclick = function (event) {
  let target = event.target;
  if (target.className != "pets__popap") sliderPets.classList.toggle("open");
};
