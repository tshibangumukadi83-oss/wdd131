// Current Year

const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;


// Last Modified Date

document.getElementById("lastModified").innerHTML =
`Last Modified: ${document.lastModified}`;
