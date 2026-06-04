let reviewCount =
Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

document.getElementById("reviewCount").textContent =
reviewCount;

document.getElementById("year").textContent =
new Date().getFullYear();

document.getElementById("lastModified").textContent =
document.lastModified;
