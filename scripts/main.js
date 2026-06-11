const button = document.querySelector("#messageButton");

const message = document.querySelector("#message");


if(button){

button.addEventListener("click", function(){

message.textContent =
`Welcome! Explore the beauty of the Democratic Republic of the Congo.`;

});

}



const places = [

{
name:"Virunga National Park",
location:"Eastern Congo"
},

{
name:"Kinshasa",
location:"Capital City"
},

{
name:"Lake Kivu",
location:"Great Lakes Region"
}

];



const list = document.querySelector("#placesList");


if(list){


const output = places.map(place =>

`<li>${place.name} - ${place.location}</li>`

);


list.innerHTML = output.join("");

}



let visits = localStorage.getItem("visits");


if(!visits){

visits = 0;

}


visits++;


localStorage.setItem("visits", visits);



const counter = document.querySelector("#counter");


if(counter){

counter.textContent =
`You visited this site ${visits} times.`;

}




const form = document.querySelector("#contactForm");


if(form){


form.addEventListener("submit", function(event){


event.preventDefault();


const name =
document.querySelector("#name").value;


const formMessage =
document.querySelector("#formMessage");



if(name){

formMessage.textContent =
`Thank you ${name}, your message was received.`;

}
else{

formMessage.textContent =
"Please enter your name.";

}


});

}
