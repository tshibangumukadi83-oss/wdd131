// Button interaction

const button = document.querySelector("#messageButton");
const message = document.querySelector("#message");


if (button && message) {

    button.addEventListener("click", () => {

        message.textContent =
        `Welcome! Explore the beauty of the Democratic Republic of the Congo.`;

    });

}



// Array + Objects

const places = [

    {
        name: "Virunga National Park",
        location: "Eastern Congo"
    },

    {
        name: "Kinshasa",
        location: "Capital City"
    },

    {
        name: "Lake Kivu",
        location: "Great Lakes Region"
    }

];



// Function

function displayPlaces() {

    const list = document.querySelector("#placesList");


    if (list) {

        list.innerHTML = places.map(place =>

        `
        <li>
        <strong>${place.name}</strong>
        - ${place.location}
        </li>
        `

        ).join("");

    }

}



// Local Storage

function saveVisits(){

    let visits = localStorage.getItem("visits");


    if (!visits){

        visits = 0;

    }


    visits++;


    localStorage.setItem("visits", visits);



    const counter = document.querySelector("#counter");


    if(counter){

        counter.textContent =
        `You visited this site ${visits} times.`;

    }

}




// Form event

function handleForm(){


const form = document.querySelector("#contactForm");


if(form){


form.addEventListener("submit", (event)=>{


event.preventDefault();


const name =
document.querySelector("#name").value;


const formMessage =
document.querySelector("#formMessage");



if(name.trim() !== ""){


localStorage.setItem("visitorName", name);



formMessage.textContent =
`Thank you ${name}, your message was received.`;


}

else{


formMessage.textContent =
"Please enter your name.";


}


});


}


}



// Run functions

displayPlaces();

saveVisits();

handleForm();
